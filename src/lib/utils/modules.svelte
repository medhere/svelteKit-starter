<script>

		import { amp, browser, dev, mode, prerendering } from '$app/env';		
		// $app/env all return true|false

		import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
		/* $app/navigation
			goto(href, { replaceState:false, noscroll:false, keepfocus:false })
			prefetch(href).then().catch()
			prefetchRoutes().then().catch()
			prefetchRoutes('/a','/b').then().catch()			
		*/

		import { navigating, page, session } from '$app/stores';
		/* $app/stores
			var { from, to }=$navigating
			var {host,path,params,query}=$page
				params.paramname and query.get().has().getAll()
			$session['sessionname']	//read/write			
		*/

		import { base, assets } from '$app/paths';
		import db from '$lib/database';	
		//src/lib

		
</script>
		