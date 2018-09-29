const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');


gulp.task('default', defaultTask);

function defaultTask(done) {
    gulp.parallel( //Run the tasks in paraller.
        'styles',
        'index-script',
        'basic-script',
        'news-script',
        'quiz-script'
    )
    done();
}

gulp.task('styles', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('index-script', function () {
        return gulp.src([
            'js/menu.js',
            'js/contentMusicPlayer.js',
            'js/indexMusicPlayer.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('index-production-script.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('basic-script', function () {
        return gulp.src([
            'js/menu.js',
            'js/contentMusicPlayer.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('basic-production-script.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('news-script', function () {
        return gulp.src([
            'js/menu.js',
            'js/contentMusicPlayer.js',
            'js/news.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('news-production-script.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('quiz-script', function () {
        return gulp.src([
            'js/menu.js',
            'js/contentMusicPlayer.js',
            'js/quiz.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('quiz-production-script.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});