<script context="module">
	//export async function load({ page, fetch, session, stuff, error, status }) {
	export async function load({ page, fetch, session, stuff }) {
		/*
			page.host, page.path
			page.params.paramname
			page.query.get('foo')
			page.query.has('baz')
			page.query.getAll('queryname')
			
			await fetch('url')
			session['sessionname']
			stuff.namedstuff
		*/
		
		return {
			props: { myprop: 'data' }
			status: 200,
			//error: new Error(`Could not load`), //with 404
			//redirect: '/',
			stuff: {name:'mike'}	//passed to child component from layout
		};
	}
</script>
<script>
	export let myprop;
</script>
		