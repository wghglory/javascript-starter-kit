import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
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
