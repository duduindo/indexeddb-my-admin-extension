const { resolve } = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./common.config.js');


const config = {
  // ### Plugins
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: resolve('src/resources/skeletons/chrome'), to: resolve('dist/chrome') }
      ]
    })
  ],

  // ### Output
  output: {
    path: resolve('dist/chrome'),
    filename: '[name].js',
    libraryTarget: 'umd',
  }
};


module.exports = (env, options) => merge(common(env, options), config);
