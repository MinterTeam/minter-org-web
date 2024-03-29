// register env before other imports @see https://www.npmjs.com/package/dotenv#how-do-i-use-dotenv-with-import-
import 'dotenv/config';
import dotenv from 'dotenv';
// const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');

const dotEnvConfig = dotenv.config();
const dotEnv = dotEnvConfig.error ? {} : dotEnvConfig.parsed;
const dotEnvMaster = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), '.env.master')));
const processEnv = {};
// copy process.env values by .env.master keys
Object.keys(dotEnvMaster).forEach((key) => {
    processEnv[key] = process.env[key];
});

import {BASE_TITLE, BASE_DESCRIPTION} from "./assets/variables";

module.exports = {
    ssr: false,
    target: 'static',
    telemetry: false,
    /*
    ** Headers of the page
    */
    head: {
        title: BASE_TITLE,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: BASE_DESCRIPTION },
            { hid: 'og-title', name: 'og:title', content: BASE_TITLE },
            { hid: 'og-description', name: 'og:description', content: BASE_DESCRIPTION },
            { hid: 'og-image', name: 'og:image', content: '/social-share.png' },
        ],
        link: [
            { rel: 'icon', href: '/favicon.png' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        ],
    },
    css: [
        './static/css/style.min.css',
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#cf5c2c' },
    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'is-active',
        middleware: [
            'profile',
            // 'auth',
        ],
    },
    plugins: [
        { src: '~/plugins/click-blur.js', ssr: false },
        { src: '~/plugins/anchor-scroll.js', ssr: false },
        { src: '~/plugins/scrollbar-visible.js', ssr: false },
        // { src: '~/plugins/persistedState.js', ssr: false },
        { src: '~/plugins/seo-gtm-consent.js', ssr: false },
        { src: '~/plugins/init-client-middleware.js', ssr: false },
    ],
    env: Object.assign({}, processEnv, dotEnv),
    modules: [
        '@nuxt/content',
    ],
    modern: 'client',
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        optimizeCSS: false,
        postcss: false,
        // optimization: {
        //     splitChunks: {
        //         name: true
        //     }
        // },
        watch: [
            // './.env',
            './api/',
            `./lang/`,
        ],
        transpile: [
            'lodash-es/',
            '@material/',
            'imask/esm/',
            'vue-imask/esm/',
            'camelcase-keys/',
            'camelcase/', // camelcase-keys
            'map-obj/', // camelcase-keys
            'quick-lru/', // camelcase-keys
            'pretty-num/src/',
            'v-file-input/src/',
        ],
    },
};
