<script>
  import { bglightBackgroundRadial } from "../common.svelte";
  </script>

<section>
  <section data-background-gradient={bglightBackgroundRadial}>
    <h1>Welcome Everyone...</h1>
  </section>
  <section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
    <h1>...Please find a seat so we can get started...</h1>
  </section>
</section>

<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <h3>Getting Started with</h3>
</section>
<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <h3>Getting Started with</h3>
  <h3 class="svelte-color">Svelte</h3>
</section>

<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <h3>Getting Started with</h3>
  <h3 class="svelte-color">Svelte</h3>
  <h3>A Game-Changer for Web Developer</h3>
</section>

<style>
  .svelte-color {
    color: #d43008;
  }
</style>
