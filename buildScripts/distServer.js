/**This is not for actual production use. This is just useful for hosting the minified production build for local debugging purpose */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression()); // gzip
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// assume this is production api. Json-server /users returns data for development environment
app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'guanghui', lastName: 'wang', email: 'hello@gmail.com' },
    { id: 2, firstName: 'yuhan', lastName: 'hu', email: 'world@gmail.com' },
    { id: 3, firstName: 'jack', lastName: 'ma', email: 'jack@gmail.com' }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
