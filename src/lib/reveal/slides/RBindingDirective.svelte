<script>
  import { bgSvelteLinear } from "../common.svelte";

  import { codeBinding } from "$lib/reveal/store/code-slide-sintassi";
  import { codeDirective, codeDirectiveAwait, codeDirectiveEach, codeDirectiveIfElse, codeDirectiveSnippet, codeDirectiveUseful } from "../store/code-svelte-direcrive";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3 >Binding & Directive</h3>
    <p class="fragment">One Way Binding: From Parent to Child</p>
    <p class="fragment">Two Way Binding: From Child to Parent</p>
    <aside class="notes">
      Svelte creates an event listener that updates the bound value. If an element already has a listener for the same event, that listener will be fired before the bound value is updated.

Most bindings are two-way, meaning that changes to the value will affect the element and vice versa. A few bindings are readonly, meaning that changing their value will have no effect on the element.
    </aside>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Binding & Directive</h3>

    <pre><code data-trim data-noescape>
  {codeBinding}
  </code></pre>
    <aside class="notes">
      bind:value è una direttiva che crea un 'two-way binding'. La variabile
      name si aggiorna automaticamente quando l'input cambia. I blocchi logici
      come sono un'altra estensione della sintassi che il compilatore trasforma
      in JavaScript puro, senza overhead aggiuntivo.
    </aside>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Template syntax: Logic if else blocks</h3>

    <pre><code data-trim data-noescape >
  {codeDirectiveIfElse}
  </code></pre>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Template syntax: each blocks</h3>

    <pre><code data-trim data-noescape >
  {codeDirectiveEach}
  </code></pre>
  </section>
<section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Template syntax: await blocks</h3>

    <pre><code data-trim data-noescape>
  {codeDirectiveAwait}
  </code></pre>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Template syntax: snippet</h3>

    <pre><code data-trim data-noescape >
  {codeDirectiveSnippet}
  </code></pre>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Template syntax: snippet</h3>

    <pre><code data-trim data-noescape >
  {codeDirectiveUseful}
  </code></pre>
  </section>


</section>

<style>
</style>
