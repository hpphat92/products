var gulp  = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
gulp.task('jsx', function(){
    return gulp.src( 'app/components/*.jsx' )
        .pipe( react() )
        .pipe( gulp.dest( 'app/js' ) )
    ;
});

gulp.task( 'browserify', function() {
    return gulp.src( 'app/js/products.js' )
        .pipe( browserify() )
        .pipe( gulp.dest( 'app' ) )
    ;
});

gulp.task( 'build', ['jsx', 'browserify'] );