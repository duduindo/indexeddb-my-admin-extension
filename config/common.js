'use strict'

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  devtool: 'cheap-source-map',

  // Watch
  watchOptions: {
    ignored: ['node_modules', 'dist', 'config', 'build', '.*']
  },

  // Module
  module: {
    rules: [
      // VUE
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      // JS
      // this will apply to both plain `.js` files AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          configFile: resolve('babel.config.js')
        }
      },

      // CSS
      // this will apply to both plain `.css` files AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },

      // SASS
      // this will apply to both plain `.scss` files AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },

      // Eslint
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  // Plugins
  plugins: [
    new VueLoaderPlugin(),
  ]
}
