<script>
  import { defaultBackground } from "../common.svelte";

</script>
<section data-auto-animate
  data-background-color={defaultBackground}
>
  <div>
    <p>
      <u>What is</u>
      <span>Svelte/SvelteKit</span>
    </p>
  </div>
</section>

<section data-auto-animate
  data-background-color={defaultBackground}
  >
  <div>
    <p>
      <u>What is</u>
      <span>Svelte/SvelteKit</span>
    </p>
    <p>How to Write a Svelte Component</p>
  </div>
</section>

<style>

  p {
    font-size: var(--font-size-title-slide, 3rem);
    font-weight: bold;
    text-align: center;
  }
</style>
