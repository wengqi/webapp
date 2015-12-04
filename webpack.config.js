var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/scripts/index.js',

  resolve: {
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.css']
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  //发布打包组建时需要注释CommonsChunkPlugin插件，使得每个插件能完整独立可用
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],

  devtool: 'source-map'
};
