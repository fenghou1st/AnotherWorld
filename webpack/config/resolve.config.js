const dirs = require('./directories.config.js');

module.exports = {
  alias: {
    src: dirs.sourceRoot,
    vendor: dirs.vendor,
    assets: dirs.assets,
    config: dirs.config,
    game: dirs.game,
  },
  modules: [dirs.nodeModules, 'node_modules'],
};
