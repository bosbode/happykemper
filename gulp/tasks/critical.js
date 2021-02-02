const gulp = require("gulp"),
critical = require('critical'),
concat = require('gulp-concat'),
config = require("../config.json");

function criticalCssConcat (done){
    setTimeout(function(){
        gulp.src('./user/themes/' + config.theme + '/assets/compiled/styles/critical/*.css')
        .pipe(concat('./user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'))
        .pipe(gulp.dest('.'))
        done();
    }, 20000)
};

function criticalCss (done) {
    critical.generate({
        src: config.criticalCSSPath.home,
        width: 1920,
        height: 1080,
        target: {
            css: './user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'
        }
    })
    done();
};

gulp.task('criticalCss', criticalCss);
