const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function(){
  gulp.src(['./js/**/*.js'])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'))
})
