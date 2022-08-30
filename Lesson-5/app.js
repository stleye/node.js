
// npm --version
//
// local dependency - use it only in this particular project
// npm -i <packageName>
//
// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>
//
// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// 
// npm run start - we can add start to scripts in package.json 
// npm run dev - we can  add dev to scripts in package.json
//
// npm uninstall <packageName> - uninstall packages


const lodash = require('lodash');

var items = [1, [2, [3, [4]]]];
console.log(lodash.flattenDeep(items));
console.log("Hello People");
