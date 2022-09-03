const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');


app.use(morgan('tiny'));
//app.use([logger, authorize]);
//app.use('/', logger) - it applies logger to the home directory
//app.use('/api', logger) - it applies logger to all the routes that start with /api, for example /api, /api/products, /api/version, etc

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
	res.send('About page');
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000");
});
