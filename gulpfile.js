var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

var scripts = ['**/*.js'];

var destPath = '.';

gulp.task('scripts', function() {
	return gulp.src(scripts)
	.pipe(concat('timers.js'))
	.pipe(gulp.dest(destPath))
	.pipe(uglify())
	.pipe(gulp.dest(destPath));

});

gulp.task('build', [
	'scripts'
]);