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


const plugins = mergeWith({}, commonConfig, {
  plugins: [
    new CopyPlugin([
      {
        from: './shells/chrome',
        to: 'chrome'
      },
    ]),
  ],
}, customizer);


const app = mergeWith({}, plugins, {
  name: 'chrome',
  entry: './src/app.js',
  output: {
    filename: 'chrome/devtools.js',
  }
});


const content = mergeWith({}, plugins, {
  name: 'chrome',
  entry: './src/content.js',
  output: {
    filename: 'chrome/content.js',
  }
});


module.exports = [app, content]
