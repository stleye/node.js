const path = require('path');

console.log(path.sep);

var filename = path.join('/content', 'subfolder', 'test.txt');
console.log(filename);

console.log(path.basename(filename));

var absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

