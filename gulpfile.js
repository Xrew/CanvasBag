var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    typescript = require('gulp-typescript'),
    copy = require('gulp-copy');

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

gulp.task('copy-scripts-samples', function() {
    return gulp.src('src-samples/**/*.js')
        .pipe(gulp.dest('dist-samples'))
});

gulp.task('copy-bundle-to-samples', function() {
   return gulp.src(['dist/bundle.js'])
       .pipe(gulp.dest('dist-samples'))
});

gulp.task('jade', function() {
   return gulp.src('src-samples/**/*.jade')
       .pipe(jade())
       .pipe(gulp.dest('dist-samples/'))
});

gulp.task('prepare-samples', ['scripts', 'jade', 'copy-scripts-samples', 'copy-bundle-to-samples'] );
gulp.task('bundle', ['scripts']);
gulp.task('default', ['bundle', 'prepare-samples']);


