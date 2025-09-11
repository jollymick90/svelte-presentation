<script>
  import { bglightBackgroundRadial } from "../common.svelte";

  import {
  svelteKitLoadData01,
    
  } from "$lib/reveal/store/code-slide-sintassi";
</script>

<section>
  <section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
    <h3>Svelte Kit Data Loading</h3>
  </section>


  <section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
  <h3>Svelte Kit Data Loading</h3>

    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
  {svelteKitLoadData01}
  </code></pre>
    <aside class="notes">
      Il file +page.server.js viene eseguito solo sul server. Qui puoi caricare dati da un database o da un'API privata in modo sicuro, senza esporli al client. La funzione    

load restituisce un oggetto che viene automaticamente passato come prop alla tua pagina Svelte.</aside>
  </section>

  
</section>

<style>

</style>
