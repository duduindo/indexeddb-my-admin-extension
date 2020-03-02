'use strict'

const CopyPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
      from: resolve('src/public/shells/browser/'),
      to: resolve('dist/browser/')
    }
  ]))

  // Vue plugin
  config.plugins.push(new VueLoaderPlugin())

  // Entry
  config.entry = {
    content: resolve('src/content.ts'),
    devtools: resolve('src/devtools.ts'),
  }

  // Output
  config.output = {
    filename: '[name].js',
    path: resolve('dist/browser/')
  }

  return config
};
