var gulp = require('gulp');
var less = require('gulp-less');
var ts = require('gulp-typescript');
var minify  = require('gulp-minify');
var minifyCSS  = require('gulp-minify-css');   
var concat = require('gulp-concat');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('less', function() {
    gulp.src('./wp-content/themes/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});


gulp.task('scripts', function() {
    tsProject.src()
        .pipe(ts(tsProject))
        .pipe(concat('/wp-content/themes/IWW_Test/newjs/all.js'))
        .pipe(minify())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('web', ['less','scripts']);