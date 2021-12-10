	<script context="module">
		export function load({ error, status }) {
			return {
				props: {
					pageError: `${status}: ${error.message}`
				}
			};
		}
	</script>

	<script>
		export let pageError;
	</script>
	
	<h1>{pageError}</h1>
	
	redirect, props, stuff