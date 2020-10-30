const { resolve } = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./common.config.js');


const config = {
  // ### Plugins
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: resolve('src/resources/skeletons/firefox'), to: resolve('dist/firefox') }
      ]
    })
  ],

  // ### Output
  output: {
    path: resolve('dist/firefox'),
    filename: '[name].js',
    libraryTarget: 'umd',
  }
};


module.exports = (env, options) => merge(common(env, options), config);
