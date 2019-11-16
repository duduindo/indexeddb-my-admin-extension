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

  // Stylus
  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'stylus-loader'
      },
    ],
  })

  // Svelte
  config.module.rules.push({
    test: /\.(html|svelte)$/,
    use: {
      loader: 'svelte-loader',
      options: {
        preprocess: require('svelte-preprocess')({
          typescript: {
            tsconfigFile: 'tsconfig.json'
          }
        })
      }
    }
  })

  // TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.svelte$/],
    }
  })

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
