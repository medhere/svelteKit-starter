import adapter from '@sveltejs/adapter-auto';
	//adapter: adapter()

//import adapter from '@sveltejs/adapter-node';	//for ssr using nodejs
	//adapter: adapter({ out: 'build', precompress: false, env: { host: '0.0.0.0', port: '2000'} })

//import adapter from '@sveltejs/adapter-static';	// for pre-rendering, add fallback page if SPA
	//adapter: adapter({pages: 'build',	assets: 'build', fallback: null})

const config = {
	compilerOptions: null,	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	
	extensions: ['.svelte'], // an array of file extensions that should be treated as Svelte components
	
	kit: {
		adapter: adapter(),
		amp: false,
		//appDir: '_app',
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		floc: false,
		host: null,
		hostHeader: null, //'X-Forwarded-Host' for reverse proxy
		hydrate: true,
		paths: {
			assets: '',
			bas: ''
		},
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		router: true,
		serviceWorker: {
			files: (filepath) => !/\.DS_STORE/.test(filepath)
		},
		ssr: true,
		target: '#svelte',
		trailingSlash: 'never',
		vite: () => ({})
	},
	
	preprocess: null
};

export default config;