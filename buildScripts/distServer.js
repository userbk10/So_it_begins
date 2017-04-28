import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/users', function(req,res) {
  //hard code return.
  res.json([
    {"id": 1, "firstName":"Bob","lastName":"Smith"},
    {"id": 2, "firstName":"Amy","lastName":"Smith"},
    {"id": 3, "firstName":"Joe","lastName":"Shmoe"}
  ]);
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
	if (err) {
		window.console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
