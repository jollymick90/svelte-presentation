<script>
  import { bgSvelteLinear } from "../common.svelte";

  import { codeBinding } from "$lib/reveal/store/code-slide-sintassi";
  import { codeDirective } from "../store/code-svelte-direcrive";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Binding & Directive</h3>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h3>Binding & Directive</h3>

    <pre><code data-trim data-noescape data-line-numbers="1-5 | 5-16">
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
    <h3>Binding & Directive</h3>

    <pre><code data-trim data-noescape data-line-numbers="1-5 | 8-14 | 18-26 | 28-38 | 41-44 |46-49 | 51-52 | 54-62 | 64-66">
  {codeDirective}
  </code></pre>
      <aside class="notes">
        ifelse Rendering condizionale pulito: niente ternari criptici nel markup.

        each Itero con key stabile: diff efficiente e animazioni senza sforzo

        await Gestisco pending/success/error direttamente nel template.

        @key Forzo il remount di un subtree quando cambia l'espressione

        class e style reattivi, senza stringhe concatenate.
      
        use: collega piccoli comportamenti riutilizzabili ai nodi.

        Transizioni pronte all'uso, composte come LEGO.

        @html inietta markup: potente, da usare con contenuti sanificati

        @debug stampa variabili in console durante lo sviluppo.
      </aside>

  </section>
</section>

<style>
</style>
