<script>
  import { defaultBackground } from "../common.svelte";

</script>
<section data-auto-animate
  data-background-color={defaultBackground}
>
  <h3>Agenda</h3>
  
  <aside class="notes">
    è seduta/seduto in questa platea e oggi saprà
  </aside>
</section>

<section data-auto-animate
  data-background-color={defaultBackground}
>
  <div>
    <p>
      <u>What is</u>
      <span>Svelte/SvelteKit</span>
    </p>
  </div>
    <aside class="notes">
    che cos'è svelte e svelte kit
  </aside>
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
    <p>How to Write a Svelte Application</p>
  </div>
      <aside class="notes">
    e come si scrive un componente svelte e un applicazione sveltekit
  </aside>
</section>

<style>

  p {
    font-size: var(--font-size-title-slide, 3rem);
    font-weight: bold;
    text-align: center;
  }
</style>
