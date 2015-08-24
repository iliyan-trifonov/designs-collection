'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('default', ['bundle', 'watch']);

gulp.task('bundle', ['build'], function () {
    return gulp.src(['./node_modules/normalize.css/normalize.css', './main.css'])
        .pipe(concat('bundle.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['clean', 'sass']);

gulp.task('clean', function (cb) {
    del(['./main.css', './bundle.css'], cb);
});

gulp.task('sass', ['clean'], function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./*.scss', ['bundle']);
});
