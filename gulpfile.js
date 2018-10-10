const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./css/style2.scss')
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
    //  .pipe(sourcemaps.write())
     .pipe(gulp.dest('./css'));
   });