var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    typescript = require('gulp-typescript');

gulp.task('scripts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
            .pipe(typescript({
                noImplicitAny: false,
                out: 'bundle.js'
            }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('jade', function() {
   return gulp.src('src-samples/**/*.jade')
       .pipe(jade())
       .pipe(gulp.dest('dist-samples/'))
});

gulp.task('default', ['scripts', 'jade']);


