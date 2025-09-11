<script>
  import { bglightBackgroundRadial } from "../common.svelte";

  import { codeBindingDirective01 } from "$lib/reveal/store/code-slide-sintassi";
</script>

<section>
  <section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
    <h3>Binding & Directive</h3>
  </section>

  <section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
    <h3>Binding & Directive</h3>

    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
  {codeBindingDirective01}
  </code></pre>
    <aside class="notes">
      bind:value è una direttiva che crea un 'two-way binding'. La variabile
      name si aggiorna automaticamente quando l'input cambia. I blocchi logici
      come sono un'altra estensione della sintassi che il compilatore trasforma
      in JavaScript puro, senza overhead aggiuntivo.
    </aside>
  </section>
</section>

<style>
</style>
