<script>
    import {lightBackground as defaultBackground} from '../common.svelte';

  import {
    code01,
    code02,
    code03
  } from "$lib/reveal/store/code-slide-sintassi";
</script>

<section>
   <section data-auto-animate data-background-color={defaultBackground}>
    <div class="myHeading">
      <h3>HowToWrite.svelte</h3>
    </div>
   </section>
  <section data-auto-animate data-background-color={defaultBackground}>
    <div class="myHeading">
      <h3>HowToWrite.svelte</h3>
    </div>

    <pre><code
        data-trim
        data-noescape
        data-line-numbers="1-11 | 1-3 | 5 | 7-11">
  {code01}
  </code></pre>
    <aside class="notes">
      Un componente Svelte vive in un file .svelte.Tutto è qui dentro: - lo
      script (generalmente in alto), - l'HTML (generalmente in mezzo), - il
      blocco style (generalmente in fondo).

      Un componente Svelte vive in un unico file .svelte, con script per la logica, HTML per il markup e style per il CSS. Il CSS è automaticamente isolato, eliminando i problemi di collisione. 
      La reattività è gestita con le 'runes', come $state, che rendono le variabili reattive ovunque.
    </aside>
  </section>

  <section data-auto-animate data-background-color={defaultBackground}>
    <div class="myHeading">
      <h3>HowToWrite.svelte</h3>
    </div>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {code02}
  </code></pre>
    <aside class="notes">Ogni blocco è opzionale</aside>
  </section>

  <section data-auto-animate data-background-color={defaultBackground}>
    <div class="myHeading">
      <h3>HowToWrite.svelte</h3>
    </div>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {code03}
  </code></pre>
    <aside class="notes"></aside>
  </section>

</section>

<style>
</style>
