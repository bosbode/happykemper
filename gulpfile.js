const gulp = require('gulp'), 
HubRegistry = require('gulp-hub'),
hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('clearCompiled', 'clearCache'), gulp.parallel('sass'), gulp.parallel('scripts', 'styles'), 'criticalCss'));
gulp.task('build--without-critical', gulp.series(gulp.parallel('clearCompiled', 'clearCache'), gulp.parallel('sass'), gulp.parallel('scripts', 'styles')));
gulp.task('default', gulp.series(gulp.parallel('clearCompiled', 'clearCache'), gulp.parallel('sass'), gulp.parallel('scripts', 'styles'), 'watch'));
