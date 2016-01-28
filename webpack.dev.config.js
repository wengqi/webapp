var SYS_CONFIG = require('./system.config.js');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry: SYS_CONFIG.SRC_PATH + '/index.js',

  resolve: {
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.css']
  },

  output: {
    path: '',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel',
      //   query:{
      //     "compact": false,
      //     "presets": ["es2015", "stage-0"]
      //   }
      // },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: "html?attrs=false" },
      { test: /\.tpl$/, loader: 'nunjucks-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],

  devtool: 'source-map'
};
