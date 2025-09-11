<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";
  import { bgSvelteLinear } from "../common.svelte";
  import {
    createSvelteAddPlugin,
    createSvelteCheckTypescript,
    createSvelteKitApp,
    createSveltePackageManager,
  } from "../store/command-code";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte (Kit) Application</h2>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte (Kit) Application</h2>
    <RCardUi dataId="creation">
      <span>npx sv create bacaro-svelte</span>
    </RCardUi>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte (Kit) Application</h2>

    <pre><code data-trim data-noescape>
  {createSvelteKitApp}
  </code></pre>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte (Kit) Application</h2>

    <pre><code data-trim data-noescape>
  {createSvelteCheckTypescript}
  </code></pre>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte (Kit) Application</h2>

    <pre><code data-trim data-noescape>
  {createSvelteAddPlugin}
  </code></pre>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte (Kit) Application</h2>

    <pre><code data-trim data-noescape>
  {createSveltePackageManager}
  </code></pre>
  </section>
</section>

<style>
  span {
    color: #0b2a4a;
  }
</style>
