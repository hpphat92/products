var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src(['app/build', 'app/app.js'], {read: false})
        .pipe(clean());
});
gulp.task('jsx', function () {
    return gulp.src(['app/components/*.jsx', 'app/components/*/*.jsx'])
        .pipe(react())
        .pipe(gulp.dest('app/build'))
        ;
});

gulp.task('browserify', function () {
    return gulp.src('app/build/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('app'))
        ;
});

gulp.task('build', ['jsx', 'browserify']);
gulp.task('default', ['build']);