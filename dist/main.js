'use strict';

// 
// Non Code Splitting
// 
// // import foo from './foo.js';
// import { version } from '../package.json';
// export default function() {
// 	console.log('version:', version);
// }

// 
// Code Splitting test with Dynamic loading
// 
function main() {
	Promise.resolve().then(function () { return require('./foo-7899e1e2.js'); }).then(({ default: foo }) => console.log(foo));
}

module.exports = main;
