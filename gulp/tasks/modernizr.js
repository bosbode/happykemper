const gulp = require('gulp'),
gulpModernizr = require('gulp-modernizr'),
config = require('../config.json');

function modernizr (){
	return gulp.src(['./user/themes/' + config.theme + '/assets/styles/**/*.scss', './user/themes/' + config.theme + '/assets/scripts/**/*.js'])
		.pipe(gulpModernizr({
			'options': [
				'setClasses'
			]
		}))
		.pipe(gulp.dest('./user/themes/' + config.theme + '/assets/compiled/scripts/'));
};

gulp.task('modernizr', modernizr);
