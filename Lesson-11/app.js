const express = require('express');
const app = express();
const logger = require('./logger');

app.use(logger);

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
	res.send('About page');
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000");
});
