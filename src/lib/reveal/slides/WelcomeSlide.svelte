<script>
  import { defaultBackground } from "../common.svelte";
  </script>

<section>
  <section data-background-color={defaultBackground}>
    <h1>Welcome Everyone...</h1>
  </section>
  <section data-auto-animate data-background-color={defaultBackground}>
    <h1>...Please find a seat so we can get started...</h1>
  </section>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
  <h1>Getting Started with</h1>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
  <h1>Getting Started with</h1>
  <h1 class="svelte-color">Svelte</h1>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
  <h1>Getting Started with</h1>
  <h1 class="svelte-color">Svelte</h1>
  <h1>A Game-Changer for Web Developer</h1>
</section>

<style>
  .svelte-color {
    color: #d43008;
  }
</style>
