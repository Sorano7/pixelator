import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/pixelator-quantizer';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base
		},
		prerender: {
			default: true
		}
	},
	plugins: [sveltekit()]
};

export default config;
