var gulp = require('gulp'),
	 sass = require('gulp-sass'),
	 pug = require('gulp-pug'),
	 browsersync = require('browser-sync'),
	 cleancss = require('gulp-clean-css'),
	 rename = require('gulp-rename'),
	 autoprefixer = require('gulp-autoprefixer'),
	 notify = require('gulp-notify');


gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: true,
	})
});


gulp.task ('pug', () => {
	const run = () => gulp.src('app/pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('app/')); 

		return run();
});


gulp.task('styles', function() {
	return gulp.src('app/scss/*.scss')
				.pipe(sass({outputStyle:'expand'}).on('error', notify.onError()))
				.pipe(rename({suffix:'_min', prefix:''}))
				.pipe(autoprefixer(['last 15 versions']))
				.pipe(cleancss({level:{1:{specialComments:0}}}))
				.pipe(gulp.dest('app/css'))
				.pipe(browsersync.reload({stream: true}))
});


gulp.task('watch', ['styles', 'pug', 'browser-sync'], function() {
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch('app/pug/**/*.pug', ['pug']);
	gulp.watch('app/*.html', browsersync.reload)
});


gulp.task('default', ['watch']);
