<script>
    import {lightBackground as defaultBackground} from '../common.svelte';

  import {
    code01,
    code02,
    code03,
    code04,
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

  <section data-auto-animate data-background-color={defaultBackground}>
    <div class="myHeading">
      <h3>HowToWrite.svelte</h3>
    </div>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {code04}
  </code></pre>
    <aside class="notes"></aside>
  </section>
</section>

<style>
</style>
