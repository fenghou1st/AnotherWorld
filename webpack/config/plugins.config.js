const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dirs = require('./directories.config.js');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = [

  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(!IS_PRODUCTION),
    __PROD__: JSON.stringify(IS_PRODUCTION),
  }),

  new webpack.NoEmitOnErrorsPlugin(),

  new webpack.EnvironmentPlugin({
    NODE_ENV: IS_PRODUCTION ? 'production' : 'development',
  }),

  new ExtractTextPlugin('[name].css'),

  new HtmlWebpackPlugin({
    template: path.join(dirs.sourceRoot, 'views/index.html'),
  }),
];

if (IS_PRODUCTION) {
  // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: IS_PRODUCTION,
  }));
}

module.exports = plugins;
