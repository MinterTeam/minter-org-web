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
const cleanCss = require('gulp-clean-css');
// images
const del = require('del');
const path = require('path');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
// country data
const fs = require('fs');
/** @type {Array<{callingCode: Array}>} */
const countryData = require('world-countries');


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
    let countryCallingCodeList = [];

    countryData.forEach((item) => {
        // take only unique codes
        const newCodes = item.callingCode.filter((code) => !countryCallingCodeList.includes(code));
        countryCallingCodeList = countryCallingCodeList.concat(newCodes);
    });


    countryCallingCodeList.sort((a, b) => {
        if (b.length !== a.length) {
            return b.length - a.length;
        } else {
            return b - a;
        }
    });
    fs.writeFile('tmp/country-codes.json', JSON.stringify(countryCallingCodeList), cb);
});


// LESS
gulp.task('less', function() {
    return gulp.src(paths.src.less)
        .pipe(plumber({errorHandler: onError}))
        .pipe(less())
        .pipe(postcss([
            autoprefixer({cascade: false}),
            postcssNormalize({forceImport: true}),
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
                imagemin.jpegtran({progressive: true}),
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
gulp.task('once', gulp.parallel('less', 'imagemin', 'countries'));
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


