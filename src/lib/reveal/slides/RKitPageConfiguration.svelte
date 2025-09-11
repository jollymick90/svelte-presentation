<script>
  import { bgSvelteLinear } from "../common.svelte";

  import {
  svelteKitLoadData01,
    
  } from "$lib/reveal/store/code-slide-sintassi";
  import { pageConfiguration } from "../store/code-svelte-kit";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Svelte Kit Page Configuration</h3>
  </section>


  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
  <h3>Svelte Kit Page Configuration</h3>

    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
  {pageConfiguration}
  </code></pre>
    <aside class="notes">
     </section>

  
</section>

<style>

</style>
