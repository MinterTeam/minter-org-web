// common
const gulp = require('gulp');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const log = require('fancy-log');
const beeper = require('beeper');
// css
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const postcssNormalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const cleanCss = require('gulp-clean-css');
// images
const del = require('del');
const path = require('path');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const jpegtran = require('imagemin-jpegtran');
const pngquant = require('imagemin-pngquant');
// country data
const fs = require('fs');
const countryData = require('world-countries');
const iso6391 = require('iso-639-3/to-1.json');


let paths = {
    src: {
        less: 'assets/less/*.less',
        img: ['assets/img/**/*.{png,jpg,gif,svg}'],
    },
    dest: {
        css: 'static/css/',
        img: 'static/img/',
    },
    watch: {
        less: 'assets/less/**/*.less',
    },
    cache: {
        tmpDir: 'tmp/',
        cacheDirName: 'gulp-cache',
    },
};



gulp.task('countries', function (cb) {
    let countryList = countryData.map((item) => {
        const lang = Object.keys(item.languages)[0];
        return {
            code: item.cca2, // ISO 3166-1 alpha-2
            name: item.name.common || item.name.official,
            lang: iso6391[lang] || '', // ISO 639-3 to ISO 639-1
        };
    })


    countryList.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    if (!fs.existsSync('tmp')){
        fs.mkdirSync('tmp');
    }
    fs.writeFile('tmp/country-list.json', JSON.stringify(countryList), cb);
});

gulp.task('country-languages', function (cb) {
    let countryLanguageList = {};

    countryData.forEach((item) => {
        Object.keys(item.languages).forEach((langCode) => {
            // take only unique languages
            if (!countryLanguageList[langCode]) {
                countryLanguageList[langCode] = item.languages[langCode];
            }
        })
    });

    // Object to Array
    countryLanguageList = Object.keys(countryLanguageList).map((langCode) => {
        return {
            code: iso6391[langCode], // ISO 639-3 to ISO 639-1
            name: countryLanguageList[langCode],
        };
    });


    countryLanguageList.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    if (!fs.existsSync('tmp')){
        fs.mkdirSync('tmp');
    }
    fs.writeFile('tmp/country-language-list.json', JSON.stringify(countryLanguageList), cb);
});



// LESS
gulp.task('less', function() {
    return gulp.src(paths.src.less)
        .pipe(plumber({errorHandler: onError}))
        .pipe(less())
        .pipe(postcss([
            autoprefixer({cascade: false}),
            postcssNormalize({forceImport: true}),
            postcssPresetEnv({
                stage: 2,
                features: {
                    'all-property': false,
                    'case-insensitive-attributes': false,
                    'focus-visible-pseudo-class': false,
                    'focus-within-pseudo-class': false,
                    'matches-pseudo-class': false,
                },
            }),
        ]))
        .pipe(cleanCss({
            level: {
                1: {},
                2: {
                    removeUnusedAtRules: true,
                },
            },
        }))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest(paths.dest.css));
});




// IMG
gulp.task('imagemin', function() {
    return gulp.src(paths.src.img)
        .pipe(plumber({errorHandler: onError}))
        .pipe(cache(
            imagemin([
                imagemin.gifsicle({interlaced: true}),
                mozjpeg({quality: 90}),
                jpegtran({progressive: true}),
                pngquant(),
                // imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({plugins: [{removeViewBox: false}]}),
            ], {
                verbose: true,
            }), {
                fileCache: new cache.Cache(paths.cache),
                name: 'default',
            }))
        .pipe(gulp.dest(paths.dest.img));
});
gulp.task('imagemin:clean-dest', function(cb) {
    del.sync(paths.dest.img);
    cb();
});
gulp.task('imagemin:clean-cache', function(cb) {
    del.sync([
        paths.cache.tmpDir + '/' + paths.cache.cacheDirName + '/default',
    ]);
    cb();
});
gulp.task('imagemin:clean', gulp.parallel('imagemin:clean-dest', 'imagemin:clean-cache'));



// Полная сборка без вотча
gulp.task('once', gulp.parallel('less', 'imagemin', 'countries', 'country-languages'));
// Полная сборка с вотчем
gulp.task('default', gulp.series(
    'once',
    function watch() {
        gulp.watch(paths.watch.less, gulp.task('less'));
        gulp.watch(paths.src.img, gulp.task('imagemin'))
            .on('unlink', function(filePath) {
                del(paths.dest.img + path.basename(filePath));
            })
            .on('unlinkDir', function(dirPath) {
                del(paths.dest.img + path.basename(dirPath));
            });
        setTimeout(function() {
            log('Watching...');
        });
    }
));




// Ошибки
let onError = function(error) {
    log([
        (error.name + ' in ' + error.plugin).bold.red,
        '',
        error.message,
        '',
    ].join('\n'));
    beeper();
    this.emit('end');
};


