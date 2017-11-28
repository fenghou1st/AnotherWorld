const path = require('path');
const dirs = require('./directories.config.js');

module.exports = {
  index: path.join(dirs.sourceRoot, 'js/index.jsx'),
};
