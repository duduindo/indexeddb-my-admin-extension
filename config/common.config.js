const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    // ### Devtool
    devtool: 'inline-cheap-source-map',

    // ### Watch
    watchOptions: {
      ignored: ['node_modules', 'dist', 'config', 'build', '.*']
    },

    // ### Dev
    devServer: {
      contentBase: resolve('dist'),
      compress: false,
      port: 8443,
      openPage: 'pages/index.html',
      clientLogLevel: 'silent'
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
      ]
    },

    // ### Plugins
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),

      // #### Pug - Pages
      new HtmlWebpackPlugin({
        inject: isDevelopment,
        cache: false,
        template: resolve('src/resources/views/pages/index.pug'),
        filename: 'pages/index.html',
        templateParameters: {
          title: 'IndexedDB My Admin Extension',
          isProduction,
          isDevelopment,
        }
      }),

      // #### Pug - Pages - Domain
      new HtmlWebpackPlugin({
        inject: isDevelopment,
        cache: false,
        template: resolve('src/resources/views/pages/domain.pug'),
        filename: 'pages/domain.html',
        templateParameters: {
          title: 'IndexedDB My Admin Extension - Domain',
          isProduction,
          isDevelopment,
        }
      }),

      // #### Pug - Pages - Database
      new HtmlWebpackPlugin({
        inject: isDevelopment,
        cache: false,
        template: resolve('src/resources/views/pages/database.pug'),
        filename: 'pages/database.html',
        templateParameters: {
          title: 'IndexedDB My Admin Extension - Database',
          isProduction,
          isDevelopment,
        }
      }),

      // #### Pug - Popup
      new HtmlWebpackPlugin({
        inject: isDevelopment,
        cache: false,
        template: resolve('src/resources/views/popup.pug'),
        filename: 'popup.html',
      }),
    ],

    // ### Entry
    entry: {
      content: resolve('src/resources/assets/content.ts'),
      background: resolve('src/resources/assets/background.ts'),
      'pages/static/build': [resolve('src/resources/assets/pages.ts'), resolve('src/resources/assets/pages.sass')],
      popup: resolve('src/resources/assets/popup.ts'),
    }
  };
};
