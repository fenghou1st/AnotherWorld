const dirs = require('./directories.config.js');

module.exports = {
  alias: {
    src: dirs.sourceRoot,
  },
  modules: [dirs.nodeModules, 'node_modules'],
};
