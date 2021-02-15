'use strict';

const srcFolder    = './src/';
const distFolder   = './dist/';

const gulp         = require('gulp');
const htmlmin      = require('gulp-htmlmin');
const scss         = require('gulp-sass');
const gcmq         = require('gulp-group-css-media-queries');
const rename       = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const babel        = require('gulp-babel');
const terser       = require('gulp-terser');
const imagemin     = require('gulp-imagemin');
const del          = require('del');
const include      = require('gulp-file-include');
const browserSync  = require('browser-sync');

const browserReload = () => {
    browserSync.init({
        server: {
            baseDir: distFolder
        },
        notify: false,
        port: 3000
    })
}

const html = () => {
    return gulp.src(srcFolder + 'pages/*.html')
        .pipe(include({prefix: '@@'}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(distFolder))
        .pipe(browserSync.stream())
}

const styles = () => {
    return gulp.src(srcFolder + 'styles/*.+(css|scss)')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(gcmq())
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(distFolder + 'styles'))
        .pipe(browserSync.stream())
}

const scripts = () => {
    return gulp.src(srcFolder + 'scripts/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(terser())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(distFolder + 'scripts'))
        .pipe(browserSync.stream())
}

const images = () => {
    return gulp.src(srcFolder + 'images/**/*')
        // .pipe(imagemin([
        //     imagemin.gifsicle({interlaced: true}),
        //     imagemin.mozjpeg({quality: 75, progressive: true}),
        //     imagemin.optipng({optimizationLevel: 3}),
        //     imagemin.svgo({plugins: [{removeViewBox: false}, {cleanupIDs: false}]})
        // ], {verbose: true}))
        .pipe(gulp.dest(distFolder + 'images'))
        .pipe(browserSync.stream())
}

const fonts = () => {
    return gulp.src(srcFolder + 'fonts/**/*')
        .pipe(gulp.dest(distFolder + 'fonts'))
        .pipe(browserSync.stream())
}

const clean = () => {
    return del(distFolder);
}

const watch = () => {
    gulp.watch(srcFolder + 'pages/**/*.html', html);
    gulp.watch(srcFolder + 'styles/**/*.scss', styles);
    gulp.watch(srcFolder + 'scripts/**/*.js', scripts);
    gulp.watch(srcFolder + 'images/**/*', images);
    gulp.watch(srcFolder + 'fonts/**/*', fonts);
}

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.watch = watch;
exports.browserReload = browserReload;

exports.build = gulp.series(
    clean,
    gulp.parallel(html, styles, scripts, images, fonts)
);

exports.default = gulp.series(
    clean,
    gulp.parallel(html, styles, scripts, images, fonts),
    gulp.parallel(watch, browserReload)
);