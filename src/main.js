// 
// Non Code Splitting
// Build command: npm run build
// 
// // import foo from './foo.js';
// import { version } from '../package.json';
// export default function() {
// 	console.log('version:', version);
// }

// 
// Code Splitting test with Dynamic loading
// Build command: rollup src/main.js -f cjs -d dist
// 
export default function() {
	import('./foo.js').then(({ default: foo }) => console.log(foo));
}