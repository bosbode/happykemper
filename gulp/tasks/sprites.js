// var gulp = require("gulp"),
// svgSprite = require("gulp-svg-sprite"),
// rename = require("gulp-rename"),
// del = require("del"),
// svg2png = require("gulp-svg2png"),
// config = require("../config.json");

// var config = {
// 	shape: {
// 		spacing: {
// 			padding: 1
// 		}
// 	},
// 	mode: {
// 		css: {
// 			variables: {
// 				replaceSvgWithPng: function(){
// 					return function(sprite, render) {
// 						return render(sprite).split(".svg").join(".png");
// 					}
// 				}
// 			},
// 			sprite: "sprite.svg",
// 			render: {
// 				css:{
// 					compiledlate: "./gulp/compiledlates/sprite.css"
// 				}
// 			}
// 		}
// 	}
// };

// gulp.task("beginClean", function(){
// 	return del(["./user/themes/" + config.theme + "/assets/compiled/sprite/", "./user/themes/" + config.theme + "/assets/images/sprite"]);
// });

// gulp.task("createSprite", ["beginClean"], function(){
// 	return gulp.src("./user/themes/" + config.theme + "/assets/images/icons/**/*.svg")
// 		.pipe(svgSprite(config))
// 		.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/compiled/sprite/"));
// });

// gulp.task("createPngCopy", ["createSprite"], function(){
// 	return gulp.src("./user/themes/" + config.theme + "/assets/compiled/sprite/css/*.svg")
// 		.pipe(svg2png())
// 		.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/compiled/sprite/css"));
// });

// gulp.task("copySpriteGraphic", ["createPngCopy"] ,function(){
// 	return gulp.src("./user/themes/" + config.theme + "/assets/compiled/sprite/css/**/*.{svg,png}")
// 	.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/images/sprite"));
// });

// gulp.task("copySpriteCSS", ["createSprite"], function(){
// 	return gulp.src("./user/themes/" + config.theme + "/assets/compiled/sprite/css/*.css")
// 		.pipe(rename("_sprite.css"))
// 		.pipe(gulp.dest("./user/themes/" + config.theme + "/assets/styles/modules"));
// });

// gulp.task("endClean", ["copySpriteGraphic", "copySpriteCSS"], function(){
// 	return del(["./user/themes/" + config.theme + "/assets/compiled/sprite/"]);
// });

// gulp.task("icons", ["beginClean", "createSprite", "createPngCopy", "copySpriteGraphic", "copySpriteCSS", "endClean"]);