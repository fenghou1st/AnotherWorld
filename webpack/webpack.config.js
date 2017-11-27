const dirs = require('./config/directories.config.js');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  context: dirs.projectRoot,

  entry: require('./config/entry.config.js'),

  output: require('./config/output.config.js'),

  module: require('./config/module.config.js'),

  resolve: require('./config/resolve.config.js'),

  plugins: require('./config/plugins.config.js'),

  externals: require('./config/externals.config.js'),

  // can only set to 'source-map' or 'cheap-module-source-map',
  // otherwise css source-map will not be generated
  devtool: IS_PRODUCTION ? false : 'source-map',
};
