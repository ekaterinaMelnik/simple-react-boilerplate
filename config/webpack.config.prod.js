const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

const { src, dist } = require('./paths').paths;

const WebpackAliases = require('./paths').aliases;

const config = {
  entry: src,
  output: {
    path: dist,
    filename: 'bundle.[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              minimaze: true,
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  'browsers': ['> 1%', 'last 2 versions']
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: {
          loader: 'file-loader?name=images/[name].[hash:6].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|otf)$/,
        use: {
          loader: 'file-loader?name=fonts/[name].[hash:6].[ext]'
        }
      },
      {
        test: /\.(ico)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(src)
      }
    ]
  },
  resolve: {
    alias: WebpackAliases,
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:6].css'
    }),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      favicon: path.join(src, '/favicon.ico'),
      template: path.join(src, '/index.ejs'),
      version: require('../package.json').version,
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
