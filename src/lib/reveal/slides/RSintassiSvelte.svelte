<script>
  import { defaultBackground } from "../common.svelte";
 import { code01 } from '$lib/reveal/store/code-slide-sintassi';
</script>
<section data-auto-animate data-background-color={defaultBackground}>
  <div class="myHeading">
    <h3>Come si scrive un componente svelte</h3>
  </div>


  <pre><code data-trim data-noescape
    data-line-numbers="1-3 | 5 | 7-11"
    >
  {code01}
  </code></pre>
  <aside class="notes">
    Un componente Svelte vive in un file .svelte. Non abbiamo bisogno di tre file separati per logica, markup e stile. Tutto è qui dentro: lo script in alto, l’HTML in mezzo, lo stile in fondo.
Ogni blocco è opzionale: se non serve lo stile, non lo scrivo. È un approccio minimale ma completo.

  </aside>
</section>

<style>
     
  .myHeading h1 {
    display: inline-block;
    vertical-align: middle;
  }
</style>