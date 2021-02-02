const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  hexrgba = require('postcss-hexrgba'),
  cssnano = require('cssnano'),
  config = require('../config.json'),
  sassGulp = require('gulp-sass');

function styles(cb) {
  const plugins = [hexrgba(), autoprefixer({ grid: true }), cssnano()];
  return gulp
    .src('./user/themes/' + config.theme + '/assets/compiled/styles/main.css')
    .pipe(postcss(plugins))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(
      gulp.dest('./user/themes/' + config.theme + '/assets/compiled/styles')
    );
}

function sass(cb) {
  return gulp
    .src('./user/themes/' + config.theme + '/assets/styles/main.scss')
    .pipe(
      sassGulp({
        includePaths: [
          'node_modules/rfs',
          'node_modules/outdatedbrowser/outdatedbrowser',
          'node_modules/@glidejs/glide/src/assets/sass',
          './user/themes/' + config.theme + '/assets/fonts/fontawesome/scss/',
        ],
      })
    )
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(
      gulp.dest('./user/themes/' + config.theme + '/assets/compiled/styles')
    );
}

// gulp.task('styles', gulp.series(sass, styles));
gulp.task('styles', styles);
gulp.task('sass', sass);

module.exports = {
  styles,
  sass,
};
