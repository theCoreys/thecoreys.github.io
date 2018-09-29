const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');


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

gulp.task('minify-covers', function() {
	return gulp.src('Multimedia/album_covers/*')
		.pipe(imagemin({
			progressive: true,
			use: [imageminPngquant()]
		}))
		.pipe(gulp.dest('dist/images/album_covers'));
});

gulp.task('minify-members', function() {
	return gulp.src('Multimedia/band_members/*')
		.pipe(imagemin({
			progressive: true,
			use: [imageminPngquant()]
		}))
		.pipe(gulp.dest('dist/images/band_members'));
});

gulp.task('minify-merch', function() {
	return gulp.src('Multimedia/merch/*')
		.pipe(imagemin({
			progressive: true,
			use: [imageminPngquant()]
		}))
		.pipe(gulp.dest('dist/images/merch'));
});

gulp.task('minify-social', function() {
	return gulp.src('Multimedia/social/*')
		.pipe(imagemin({
			progressive: true,
			use: [imageminPngquant()]
		}))
		.pipe(gulp.dest('dist/images/social'));
});

gulp.task('minify-sound', function() {
    return gulp.src('Multimedia/sound/*.svg')
    .pipe(imagemin({
        progressive: true,
        use: [imageminPngquant()]
    }))
    .pipe(gulp.dest('dist/images/sound'));
});

gulp.task('minify-logo', function() {
    return gulp.src('Multimedia/The-Coreys-Logo.png')
        .pipe(imagemin({
            progressive: true,
            use: [imageminPngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});
