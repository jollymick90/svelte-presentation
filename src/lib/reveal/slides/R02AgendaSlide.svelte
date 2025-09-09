<script>
  import { defaultSvelteBackground } from "../common.svelte";
</script>

<section>
  <section data-auto-animate data-background-color={defaultSvelteBackground}>
    <h3>Agenda</h3>

    <aside class="notes"></aside>
  </section>

  <section data-auto-animate data-background-color={defaultSvelteBackground}>
    <div>
      <h3>Agenda</h3>
      <p>
        <u>What is</u>
        <span>Svelte/SvelteKit</span>
      </p>
    </div>
    <aside class="notes">che cos'è svelte e svelte kit</aside>
  </section>

  <section data-auto-animate data-background-color={defaultSvelteBackground}>
    <div>
      <h3>Agenda</h3>
      <p>
        <u>What is</u>
        <span>Svelte/SvelteKit</span>
      </p>
      <p><u>How to Write</u> a Svelte Component</p>
    </div>
    <aside class="notes">
      e come si scrive un componente svelte e un applicazione sveltekit
    </aside>
  </section>
  <section data-auto-animate data-background-color={defaultSvelteBackground}>
    <div>
      <h3>Agenda</h3>
      <p>
        <u>What is</u>
        <span>Svelte/SvelteKit</span>
      </p>
      <p><u>How to Write</u> a Svelte Component</p>
      <p><u>How to Create</u> a Svelte Application</p>
    </div>
    <aside class="notes">
      e come si scrive un componente svelte e un applicazione sveltekit
    </aside>
  </section>
</section>

<style>
  p {
    font-size: var(--font-size-title-slide, 3rem);
    font-weight: bold;
    text-align: center;
  }
</style>
