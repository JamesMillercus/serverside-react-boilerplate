const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

const config = {
	// Tell webpack the root file of our server application
	entry: './src/client/js/client.js',
	//  Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './../build/client/js')
	},
	plugins: [
	    new BrowserSyncPlugin(
	      // BrowserSync options
	      {
	        // browse to http://localhost:3000/ during development
	        host: 'localhost',
	        port: 4000,
	        // proxy the Webpack Dev Server endpoint
	        // (which should be serving on http://localhost:4000/)
	        // through BrowserSync
	        proxy: 'http://localhost:3000/'
	      },
	      // plugin options
	      {
	        // allow BrowserSync to reload the page
	        reload: true
	      }
	    ),
	    new webpack.DefinePlugin({
	      __isBrowser__: "true"
	    })
	]
};

module.exports = merge(baseConfig, config);