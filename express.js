const express = require('express');
const app = express();
const fs = require('fs');

const port = 4001;

app.get('/', (req, res) => {
	res.send('Hello from express');
});

app.listen(port, (err) => {
	if (err) {
		return console.log('something went wrong...', err);
	}

	console.log(`server is listening on ${port}`);
});