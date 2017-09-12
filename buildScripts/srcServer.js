/* eslint-disable no-console */

/** express dev server */

// babel-node support import for nodejs
import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

/** integrates webpack with express */
import webpack from 'webpack';
import config from '../webpack.config.dev';
const compiler = webpack(config);
import webpackDevMiddleware from 'webpack-dev-middleware';
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
