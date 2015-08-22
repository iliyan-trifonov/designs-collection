'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['clean', 'copy', 'sass']);

gulp.task('copy', ['clean'], function () {
    return gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./'));
});

gulp.task('sass', ['copy'], function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    return gulp.src(['./main.css', './jquery.min.js'])
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch('./*.scss', ['sass']);
});
