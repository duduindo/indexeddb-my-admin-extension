'use strict'

const CopyPlugin = require('copy-webpack-plugin')
const { resolve } = require('./tools')
const common = require('./common')


// Exports
module.exports = () => {
  const config = {
    ...common({})
  }

  // Plugin Copy
  config.plugins.push(new CopyPlugin([
    {
      from: resolve('shells/browser/'),
      to: resolve('dist/browser/')
    }
  ]))

  // Entry
  config.entry = {
    devtools: resolve('src/devtools/index.ts'),
    content: resolve('src/content/index.ts')
  }

  // Output
  config.output = {
    filename: '[name].js',
    path: resolve('dist/browser/')
  }

  // Server
  config.devServer = {
    contentBase: resolve('dist/browser/'),
    compress: false,
    port: 9000
  }

  return config
};
