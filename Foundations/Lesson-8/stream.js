const { createReadStream } = require('fs');

const stream = createReadStream('./content/bigFile.txt');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/bigFile.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/bigFile.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
	console.log(result);
})
