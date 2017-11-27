const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = [

  new ExtractTextPlugin('[name].css'),

  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(!IS_PRODUCTION),
    __PROD__: JSON.stringify(IS_PRODUCTION),
  }),

  new webpack.NoEmitOnErrorsPlugin(),

  new webpack.EnvironmentPlugin({
    NODE_ENV: IS_PRODUCTION ? 'production' : 'development',
  }),
];

if (IS_PRODUCTION) {
  // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: IS_PRODUCTION,
  }));
}

module.exports = plugins;
