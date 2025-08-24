<script lang="ts">
    const { 
        gistId = "",
         theme = "dark",
          height = 520,
           file = "Test.svelte" 
           } = $props();
    const src = `https://svelte.dev/repl/${gistId}?version=latest&file=${encodeURIComponent(file)}&theme=${theme}`
</script>

<iframe 
    title="Svelte REPLS"
    {src}
    style="width: 100%; border: 0; height: {height}px;"
    allow="clipboard-write; clipboard-read"
></iframe>