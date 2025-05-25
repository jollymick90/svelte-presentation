// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const config = {
// 	preprocess: vitePreprocess(),
// 	kit: { adapter: adapter() }
// };

import adapter from '@sveltejs/adapter-static';
const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: 
		adapter({
			fallback: '200.html' // may differ from host to host
		})
	 }
};

export default config;


