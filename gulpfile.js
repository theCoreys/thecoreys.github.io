var gulp = require('gulp');
var sass = require ('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('styles', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
    .pipe(gulp.dest('./dist/css'))
});