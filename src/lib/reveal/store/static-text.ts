export const firstCodeComponent =`
<script module>
	let current;
</script>
<script>
	let name = $state('world');
	let count = $state(0);
</script>

<p>Hello {name}!</p>

<input bind:value={name} />
<button onclick={() => count += 1}>
	clicks: {count}
</button>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
            
`;


