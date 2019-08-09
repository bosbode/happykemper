var path = require('path'),
UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
config = require('./gulp/config.json');

module.exports = {
	mode: 'none',
	entry: {
		App: './user/themes/' + config.theme + '/assets/scripts/App.js',
		Vendor: './user/themes/' + config.theme + '/assets/scripts/Vendor.js'
	},
	output: {
		path: __dirname + '/user/themes/' + config.theme + '/assets/compiled/scripts',
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	resolve: {
		alias: {
			"TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
			"TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
			"TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
			"TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
			"ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
			"animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
			"debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
		}
	},
	plugins: [
    new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					drop_debugger: false
				}
			}
		})
  ]
}