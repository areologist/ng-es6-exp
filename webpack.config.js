const webpack = require('webpack');
const path = require('path');
const HtmlPack = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/app/app'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '/bundle.js'
  },

  devtool: 'sourcemap',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPack({ template: './src/index.html' })
  ],

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css/, loader: 'style!css' },
      {
        test: /\.js?$/, loader: 'babel',
        exclude: [/node_modules/, /\.spec\.js/]
      },
      // asset loaders for bootstrap
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    // hostname: 'mbp',
    hot: true
  }
};
