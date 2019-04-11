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

function resolve(dir) {
  return path.join(__dirname, '..', dir)
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
  entry: './src/devtools/app.js',
  output: {
    filename: 'chrome/devtools.js',
  },

  // Resolve
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src/devtools'),
    }
  },
});


const content = mergeWith({}, plugins, {
  name: 'chrome',
  entry: './src/content/app.js',
  output: {
    filename: 'chrome/content.js',
  },

  // Resolve
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src/content'),
    }
  },
});


module.exports = [app, content]
