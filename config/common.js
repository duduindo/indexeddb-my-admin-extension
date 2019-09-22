'use strict'

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('./tools')


module.exports = (options = {config: {}}) => {
  const config = {
    devtool: null,
    watchOptions: null,
    module: {
      rules: []
    },
    plugins: [],
    resolve: {
      extensions: [],
      alias: {}
    },
    entry: {},
    output: {},
    ...options.config
  }

  config.devtool = 'cheap-source-map';
  config.watchOptions = {
    ignored: ['node_modules', 'dist', 'config', 'build', '.*']
  };

  // Vue
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader'
  })

  // JS
  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
      configFile: resolve('babel.config.js')
    }
  })

  // TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/],
    }
  })

  // CSS
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
  })

  // SASS - .scss
  config.module.rules.push({
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
  })

  // SASS - .sass
  config.module.rules.push({
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
  })

  // Stylus
  config.module.rules.push({
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
  })

  // Eslint
  config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  })

  // Resolve
  config.resolve.extensions = ['.js', '.vue', '.ts', '.tsx']
  config.resolve.alias['@'] = resolve('src')
  config.resolve.alias['~'] = resolve('src')

  // Plugin VueLoader
  config.plugins.push(new VueLoaderPlugin())

  return config
}
