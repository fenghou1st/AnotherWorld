'use strict';

const dirs = require('./directories.config.js');

module.exports = {
  alias: {
    sourceRoot: dirs.sourceRoot,
  },
  modules: [dirs.nodeModules, 'node_modules'],
};
