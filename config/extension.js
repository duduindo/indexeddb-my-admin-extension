'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('./tools')
const custom = require('./common.js')


// Exports
module.exports = () => {
  const config = {
    ...custom()
  }

  // Vue
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader'
  })

  // Plugin VueLoader
  config.plugins.push(new VueLoaderPlugin())

  return config
};
