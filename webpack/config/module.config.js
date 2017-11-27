const path = require('path');
const eslintFormatter = require('eslint-friendly-formatter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirs = require('./directories.config.js');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  rules: [
    {
      enforce: 'pre',
      resource: {
        test: /\.(js|jsx)$/,
        include: dirs.sourceRoot,
        exclude: /node_modules/,
      },
      use: [
        {
          loader: 'eslint-loader',
          options: {
            fix: true,
            cache: true,
            formatter: eslintFormatter,
            failOnError: true,
            configFile: path.join(dirs.config, 'eslint/eslint.config.js'),
          },
        },
      ],
    },
    {
      resource: {
        test: /\.js$/,
        include: dirs.sourceRoot,
        exclude: /node_modules/,
      },
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {modules: false}],
            ],
            cacheDirectory: true,
          },
        },
      ],
    },
    {
      resource: {
        test: /\.jsx$/,
        include: dirs.sourceRoot,
        exclude: /node_modules/,
      },
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {modules: false}],
              ['react'],
            ],
            cacheDirectory: true,
          },
        },
      ],
    },
    {
      resource: {
        test: /\.css$/,
      },
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {sourceMap: !IS_PRODUCTION},
        },
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: IS_PRODUCTION,
              sourceMap: !IS_PRODUCTION,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(dirs.config, 'postcss/postcss.config.js'),
              },
              sourceMap: !IS_PRODUCTION,
            },
          },
        ],
      }),
    },
    {
      resource: {
        test: /\.scss$/,
      },
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {sourceMap: !IS_PRODUCTION},
        },
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: IS_PRODUCTION,
              sourceMap: !IS_PRODUCTION,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(dirs.config, 'postcss/postcss.config.js'),
              },
              sourceMap: !IS_PRODUCTION,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          },
        ],
      }),
    },
    {
      resource: {
        test: /\.json$/,
        include: dirs.sourceRoot,
      },
      use: [{loader: 'json-loader'}],
    },
    {
      resource: {
        test: /\.(yaml|yml)$/,
        include: dirs.sourceRoot,
      },
      use: [
        {loader: 'json-loader'},
        {loader: 'yaml-loader'},
      ],
    },
    {
      resource: {
        test: /\.(txt|vert|frag)$/,
        include: dirs.sourceRoot,
      },
      use: [{loader: 'raw-loader'}],
    },
    {
      resource: {
        test: /\.(png|jpg|gif)$/,
      },
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './images/[hash].[ext]',
          },
        },
      ],
    },
    {
      resource: {
        test: /\.(svg|ttf|otf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
      },
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './fonts/[name].[ext]',
          },
        },
      ],
    },
  ],
};
