const path = require('path');
const dirs = require('./directories.config.js');

module.exports = {
  index: path.join(dirs.sourceRoot, 'javascripts/index.jsx'),
};
