const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const config = {
	// Tell webpack the root file of our server application
	entry: './src/client/client.js',
	//  Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './../build/client')
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
	        // prevent BrowserSync from reloading the page
	        // and let Webpack Dev Server take care of this
	        reload: true
	      }
	    )
	]
};

module.exports = merge(baseConfig, config);