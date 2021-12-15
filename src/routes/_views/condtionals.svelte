<script>

let things = [ { id: 1, name: 'apple' }, { id: 2, name: 'banana' } ];
let menu = [ 'Cookies and cream', 'Mint choc chip', 'Raspberry ripple' ];
var number=1;

</script>


<!--
{#if user}

{:else if}

{:else}

{/if}
			
{#each cats as { id, name }, i} | {#each cats as cat} | {#each cats as cat, i}
	{i + 1}: {name} | {cat.name}
{/each}
			
{#each things as thing (thing.id)}	//(KEY)
	<Thing name={thing.name}/>
{/each}
			
{#each menu as flavour}
	<label>	<input type=checkbox name="flavours" value={flavour}> {flavour} </label>
{/each}

async/await or any other promise, save promise in var
{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

{#key number}	//Key blocks destroy and recreate their contents when the value of an expression changes.
	<span> {number} </span>
{/key}
<button on:click={() => { number += 1; }}> Increment </button>

-->