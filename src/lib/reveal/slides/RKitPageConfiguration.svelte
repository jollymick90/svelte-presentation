<script>
  import { bgSvelteLinear } from "../common.svelte";

  import { svelteKitLoadData01 } from "$lib/reveal/store/code-slide-sintassi";
  import {
    pageConfigurationPureCSR,
    pageConfigurationPureSSG,
    pageConfigurationPureSSR,
  } from "../store/code-svelte-kit";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Svelte Kit Page Configuration</h3>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Client-Side Rendering (CSR) Only</h3>

    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
  {pageConfigurationPureCSR}
  </code></pre>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Fully Static (No Client-Side JavaScript)</h3>
    <h3>SSR</h3>
    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
  {pageConfigurationPureSSR}
  </code></pre>
    <h3>SSG</h3>
    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
  {pageConfigurationPureSSG}
  </code></pre>
  </section>
</section>

<style>
</style>
