import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/*eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/users', function(req,res) {
  //hard code return.
  res.json([
    {"id": 1, "firstName":"Bob","lastName":"Smith"},
    {"id": 2, "firstName":"Amy","lastName":"Smith"},
    {"id": 3, "firstName":"Joe","lastName":"Shmoe"}
  ]);
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
	if (err) {
		window.console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
