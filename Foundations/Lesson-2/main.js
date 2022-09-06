#! /usr/local/bin/node

const names = require('./names.js');

const sayHi = (name) => {
	console.log(`Hello there ${name}`);
}

sayHi(names.sebastian);
sayHi(names.peter);
