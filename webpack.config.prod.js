import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create html file that includes reference to bundled js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify Js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
