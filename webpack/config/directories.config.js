const path = require('path');

const dirs = {};
dirs.projectRoot = path.join(__dirname, '..', '..');
dirs.webpack = path.join(dirs.projectRoot, 'webpack');
dirs.config = path.join(dirs.webpack, 'config');
dirs.nodeModules = path.join(dirs.projectRoot, 'node_modules');
dirs.sourceRoot = path.join(dirs.projectRoot, 'src');
dirs.vendor = path.join(dirs.projectRoot, 'vendor');
dirs.dist = path.join(dirs.projectRoot, 'dist');
dirs.assets = path.join(dirs.projectRoot, 'assets');

module.exports = dirs;
