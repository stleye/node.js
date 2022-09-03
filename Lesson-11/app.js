const express = require('express');
const app = express();
const logger = require('./logger');

app.get('/', logger, (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.get('/about', logger, (req, res) => {
	res.send('About page');
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000");
});
