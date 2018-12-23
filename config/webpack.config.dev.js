const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { src, dist } = require('./paths').paths;

const WebpackAliases = require('./paths').aliases;

const config = {
  entry: src,
  output: {
    path: dist,
    filename: 'bundle.[hash:6].js'
  },
  devtool: 'cheap-module-source-map',
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
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              camelCase: true
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
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App title',
      favicon: path.join(src, '/favicon.ico'),
      template: path.join(src, '/index.ejs'),
      version: require('../package.json').version,
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ],
  devServer: {
    contentBase: dist,
    port: 8000,
    compress: false,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    clientLogLevel: 'none'
  }
};

module.exports = config;
