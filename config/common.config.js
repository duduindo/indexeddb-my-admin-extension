const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const pages = require('./pages.json')


module.exports = (env, options) => {

  return {
    // ### Devtool
    devtool: 'inline-cheap-source-map',

    // ### Watch
    watchOptions: {
      ignored: ['node_modules', 'dist', 'config', 'build', '.*']
    },

    // ### Resolve
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.svelte', '.pug', '.sass', '.scss'],
      mainFields: ['svelte', 'browser', 'main'],
      alias: {
        '@': resolve('src')
      }
    },

    // ### Loaders
    module: {
      rules: [
        // #### Sass
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },

        // #### Pug
        {
          test: /\.pug?$/,
          loader: 'pug-loader',
        },

        // #### Svelte
        {
          test: /\.(svelte)$/,
          loader: 'svelte-loader'
        },

        // #### Babel
        {
          test: /\.[tj]s?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },

        // #### TypeScript
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },

        // #### Fonts - File loader
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
                publicPath: '/fonts/',
              }
            }
          ]
        }
      ]
    },

    // ### Plugins
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),

      // #### Pug - Pages
      ...pages.map(page => {
        return new HtmlWebpackPlugin({
          inject: false,
          cache: false,
          template: resolve(page.template),
          filename: page.filename,
          templateParameters: {
            title: page.title,
          },
        })
      }),

      // #### Pug - Popup
      new HtmlWebpackPlugin({
        inject: false,
        cache: false,
        template: resolve('src/resources/views/popup.pug'),
        filename: 'popup.html',
      }),

      // Copy
      new CopyPlugin({
        patterns: [
          { from: resolve('src/resources/skeleton'), to: resolve('dist') }
        ]
      })
    ],

    // ### Entry
    entry: {
      // Content
      content: resolve('src/resources/assets/content.ts'),

      // Background
      background: resolve('src/resources/assets/background.ts'),

      // Pages
      'pages/static/build': resolve('src/resources/assets/pages.ts'),
      'pages/static/default': resolve('src/resources/assets/sass/default.sass'),
      'pages/static/dark': resolve('src/resources/assets/sass/dark.sass'),
      'pages/static/material': resolve('src/resources/assets/sass/material.sass'),

      // Popup
      popup: resolve('src/resources/assets/popup.ts'),
    },

    // ### Output
    output: {
      path: resolve('dist'),
      filename: '[name].js',
      libraryTarget: 'umd',
    }
  };
};
