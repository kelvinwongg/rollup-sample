'use strict';

var version = "1.0.0";

// import foo from './foo.js';
function main() {
	console.log('version:', version);
}

// Code Splitting test with Dynamic loading
// export default function() {
// 	import('./foo.js').then(({ default: foo }) => console.log(foo));
// }

module.exports = main;
