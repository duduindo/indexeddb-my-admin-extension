'use strict'

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  mode: 'development',
  // entry: [
  //   './src/app.js'
  // ],
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: () => 'devtools.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
