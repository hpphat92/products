var gulp  = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
gulp.task('jsx', function(){
    return gulp.src( ['app/components/*.jsx','app/components/*/*.jsx'] )
        .pipe( react() )
        .pipe( gulp.dest( 'app/js' ) )
    ;
});

gulp.task( 'browserify', function() {
    return gulp.src( 'app/js/app.js' )
        .pipe( browserify() )
        .pipe( gulp.dest( 'app' ) )
    ;
});

gulp.task( 'build', ['jsx', 'browserify'] );
gulp.task( 'default', ['build'] );