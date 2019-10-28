'use strict'

const path = require('path')
const dotenv = require('dotenv')
const { resolve } = require('path')

dotenv.config()

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
      alias: {},
      mainFields: [],
    },
    entry: {},
    output: {},
    devServer: {},
    mode: process.env.MODE || 'production',
    ...options.config
  }

  config.devtool = 'cheap-source-map';
  config.watchOptions = {
    ignored: ['node_modules', 'dist', 'config', 'build', '.*']
  };

  // Svelte
  config.module.rules.push({
    test: /\.(html|svelte)$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        preprocess: require('svelte-preprocess')({
          typescript: {
            tsconfigFile: 'tsconfig.json'
          },
          stylus: {
            paths: ['node_modules'],
          },
        })
      }
    }
  })

  // JS
  // config.module.rules.push({
  //   test: /\.js$/,
  //   loader: 'babel-loader',
  //   options: {
  //     configFile: resolve('babel.config.js')
  //   }
  // })

  // TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.svelte$/],
    }
  })

  // Eslint
  // config.module.rules.push({
  //   enforce: 'pre',
  //   test: /\.(js|svelte|ts)$/,
  //   loader: 'eslint-loader',
  //   exclude: /node_modules/
  // })

  // Server
  config.devServer = {
    contentBase: resolve('dist/browser/'),
    compress: false,
    port: process.env.SERVER_PORT || 9000
  }

  // Resolve
  config.resolve.extensions = ['.mjs', '.js', '.svelte', '.ts', '.tsx']
  config.resolve.mainFields = ['svelte', 'browser', 'module', 'main']
  config.resolve.alias = {
    svelte: resolve('node_modules', 'svelte'),
    '@': resolve('src/js'),
    'common': resolve('src/js/common'),
    'css': resolve('src/css'),
  }

  return config
}
