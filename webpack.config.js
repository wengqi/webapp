var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var glob_entries = require('webpack-glob-entries');

module.exports = {
  entry: glob_entries('./examples/scripts/*.js'), //demo演示
  //entry: glob_entries('./src/**/*.js'),//发布时使用，可以将组建独立打包

  resolve: {
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  },

  output: {
    //path: path.join(process.cwd(), 'dist'),// 可以注释掉，使用gulp中定义的dest
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          "compact": false,
          "presets" : ['es2015','react']
        }
      }, 
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, 
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',"css-loader!less-loader?sourceMap"
        )
      }, 
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',"css-loader!sass-loader?sourceMap"
        )
      }, 
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            'style-loader', 'css-loader'
        )
      }
    ]
  },

  //发布打包组建时需要注释CommonsChunkPlugin插件，使得每个插件能完整独立可用
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('[name].css')
  ],

  devtool: 'source-map'
};
