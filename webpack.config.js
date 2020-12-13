const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCSSExtractPlugin({
    filename: 'app.bundle.[hash].css'
  }),
  new HtmlWebpackPlugin({
    filename: 'index.htm',
    template: 'src/index.htm'
  })
];

module.exports = {
    mode: 'development',
    resolve: {
      extensions: ['.js']
    },
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.[hash].js',
        path: `${__dirname}/dist`,
        publicPath: '/',
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, 'css-loader'],
          },    
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'resources/',
                  publicPath: 'resources/'
                }
              }
            ]
          }
        ]
      },
      plugins,
      devServer: {
        host: '192.168.0.24',
        port: 8080,
        disableHostCheck: true
    }
};