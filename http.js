const http = require('http');
const prot = 3000;

const requestHandler = (req, res) => {
	console.log(req.url);
	res.end('Hello');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('Error', err);
	}
	console.log(`server is listening to ${port}`);
});