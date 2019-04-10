'use strict'

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const mergeWith = require('lodash.mergewith');
const commonConfig = require('./common.js');


function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}


module.exports = mergeWith(commonConfig, {
  name: 'chrome',
  entry: './src/app.js',
  output: {
    filename: 'chrome/devtools.js',
  },
  plugins: [
    new CopyPlugin([
      {
        from: './shells/chrome',
        to: 'chrome'
      },
    ]),
  ],
}, customizer);
