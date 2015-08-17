'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['clean', 'copy', 'sass']);

gulp.task('copy', function () {
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
    gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
    gulp.src(['./main.css', './jquery.min.js'])
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch('./*.scss', ['sass']);
});
