'use strict'

const CopyPlugin = require('copy-webpack-plugin')
const { resolve } = require('./tools')
const common = require('./common')


// Exports
module.exports = () => {
  const config = {
    ...common({}, 'extension')
  }

  // Plugin Copy
  config.plugins.push(new CopyPlugin([
      {
        from: resolve('shells/chrome'),
        to: resolve('dist/chrome/IndexedDBMyAdmin')
      },
      {
        from: resolve('src/devtools/assets/images'),
        to: resolve('dist/chrome/IndexedDBMyAdmin/images')
      }
    ]))

  // Entry
  config.entry = {
    devtools: resolve('src/devtools/app.ts'),
    content: resolve('src/content/app.js')
  }

  // Output
  config.output = {
    filename: '[name].js',
    path: resolve('dist/chrome/IndexedDBMyAdmin/')
  }

  return config
};
