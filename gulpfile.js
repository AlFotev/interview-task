var gulp = require('gulp');
var sass = require('gulp-sass');
  
  gulp.task('default', defaultTask);
  
  function defaultTask(done) {
    return gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    done();
  }