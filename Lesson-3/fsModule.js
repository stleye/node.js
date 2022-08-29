
const fs = require('fs');


function syncRead() {
	const first = fs.readFileSync('./textFile.txt', 'utf8');
	console.log(first);
}

function asyncRead() {
	fs.readFile('./content/textFile.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	})
}

function syncWrite() {
	fs.writeFileSync('./content/writeTextFile.txt', 'Here is the result');
}

function asyncWrite() {
	fs.writeFile('./content/writeTextFile.txt', 'Here is the result', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
}

asyncWrite();
