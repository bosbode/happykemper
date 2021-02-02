var path = require('path'),
config = require('./gulp/config.json');

module.exports = {
	mode: 'none',
	entry: {
		App: './user/themes/' + config.theme + '/assets/scripts/App.js',
		Vendor: './user/themes/' + config.theme + '/assets/scripts/Vendor.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	output: {
		path: __dirname + '/user/themes/' + config.theme + '/assets/compiled/scripts',
		filename: '[name].js'
	},
	plugins: [],
	optimization: {
    minimize: true
  }
}