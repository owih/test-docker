const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
let url = process.env.APP_URL.replace(/(^\w+:|^)\/\//, '');
mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.options({
    hmrOptions: {
        host: 'localhost',  // mysite.test is my local domain used for testing
        port: 3000,
    }
 });

mix.webpackConfig({
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        // disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        // host: "localhost",
        host: '0.0.0.0',
        port: 3000,
        proxy: {
          '*': 'http://webserver:8080'
        }
    },
});