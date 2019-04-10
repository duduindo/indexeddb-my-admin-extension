'use strict'

const path = require('path')
const { parsed: env } = require('dotenv').config()
const { VueLoaderPlugin } = require('vue-loader')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function isDevelopment() {
  if (env.NODE_ENV && env.NODE_ENV !== 'development') {
    return false
  } else {
    return true
  }
}


module.exports = {
  // Mode
  mode: isDevelopment() ? 'development' : 'production',

  // Watch
  watch: isDevelopment(),
  watchOptions: {
    // aggregateTimeout: 1000,
    // poll: 1000,
    ignored: ['node_modules', 'dist', 'config', 'build', '.*']
  },

  // Resolve
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },

  // Module
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

  // Plugins
  plugins: [
    new VueLoaderPlugin(),
  ]
}
