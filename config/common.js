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

      // TypeScript
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          },
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

      // Stylus
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'stylus-loader'
          },
        ],
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
