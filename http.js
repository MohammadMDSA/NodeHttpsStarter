const http = require('http');
const port = 4000;

const requestHandler = (req, res) => {
	console.log(req.url);
	res.end('Hello M. M. A.!!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('Error', err);
	}
	console.log(`server is listening to ${port}`);
});