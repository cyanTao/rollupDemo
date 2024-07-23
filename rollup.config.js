import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/index.min.js',
		format: 'umd',
		name: 'myBundle'
	},
	plugins: [
		resolve({
			browser: true,
			// preferBuiltins: true,
		}),
	]

};
