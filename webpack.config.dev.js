const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash:6].js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
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
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App title',
      template: path.join('./src/index.ejs'),
      version: require('./package.json').version,
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 8000,
    compress: true
  }
};

module.exports = config;
