'use strict'

const CopyPlugin = require('copy-webpack-plugin')
const { resolve } = require('path')
const common = require('./common')


// Exports
module.exports = () => {
  const config = {
    ...common({})
  }

  // Plugin Copy
  config.plugins.push(new CopyPlugin([
      {
        from: resolve('shells/chrome'),
        to: resolve('dist/chrome/IndexedDBMyAdmin')
      }
    ]))

  // Entry
  config.entry = {
    devtools: resolve('src/js/products/devtools/index.ts'),
    content: resolve('src/js/products/content/index.ts')
  }

  // Output
  config.output = {
    filename: '[name].js',
    path: resolve('dist/chrome/IndexedDBMyAdmin/')
  }

  return config
};
