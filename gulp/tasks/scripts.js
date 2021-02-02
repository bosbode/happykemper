const gulp = require('gulp'),
webpack = require('webpack');

function scripts (cb){
	webpack(require('../../webpack.config.js'), function(error, stats){
		if(error){
			console.log(error.toString());
		};
		console.log(stats.toString());
		cb();
	});
};

gulp.task('scripts', scripts);

module.exports = {
	scripts
}
