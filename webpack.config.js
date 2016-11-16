
const path = require('path');

const webpack = require('webpack');



module.exports = {
  entry: './js/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'client.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: __dirname,
    modulesDirectories: [ 'js', 'styles', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass'],
      },
      // the url-loader uses DataUrls for small woff files.
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      // the file-loader emits files.
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },
      { 
        test: /\.png$/, 
        loader: 'url-loader?limit=100000' 
      },
      { 
        test: /\.jpg$/, 
        loader: 'file-loader' 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
    	jQuery: 'jquery',
    	$: 'jquery',
    	jquery: 'jquery'
    })
  ]
};




