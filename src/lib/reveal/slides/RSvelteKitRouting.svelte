<script>
  import { bgSvelteLinear } from "../common.svelte";
  import {
    routingDirectoryFolder,
    routingDirectoryFolderEasy,
    routingLibrary,
    routingSvelteKit,
  } from "../store/code-svelte-kit";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2>Svelte Routing</h2>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h4>Svelte routing library</h4>

    <pre><code data-trim data-noescape>
  {routingLibrary}
  </code></pre>
  </section>
   <section data-audo-animate data-background-gradient={bgSvelteLinear}>
    <h4>svelte kit routing</h4>
    <p class="fragment" data-fragment-index="0">Filesystem-based router</p>
    <p class="fragment" data-fragment-index="1">
      file structure is routing configuration
    </p>
    <pre class="fragment"><code data-trim data-noescape>
    {routingDirectoryFolderEasy}
  </code></pre>
  <p class="fragment">https://bacarosvelte/about</p>
  <p class="fragment">https://bacarosvelte/products</p>
  </section>

  <section data-audo-animate data-background-gradient={bgSvelteLinear}>
    <h4>svelte kit routing</h4>
    <pre class="code-height"><code data-trim data-noescape>
    {routingDirectoryFolder}
  </code></pre>
    <aside class="notes">The routes of your app</aside>
  </section>
  <section data-background-gradient={bgSvelteLinear}>
    <h4>svelte kit is routing</h4>
    <pre><code data-trim data-noescape>
  {routingSvelteKit}
  </code></pre>

    <aside class="notes">
      - **`+page.svelte`**: File per l'interfaccia utente (UI). Rappresenta una
      singola pagina del sito. - **`+page.server.js`**: File per il caricamento
      dei dati lato server. Utilizzato per pre-caricare le informazioni
      necessarie alla pagina. - **`+layout.svelte`**: File per la creazione di
      layout persistenti. Utile per elementi che rimangono visibili su più
      pagine, come header e footer. - **`+server.js`**: File per la creazione di
      endpoint API REST-like. Permette di gestire richieste e risposte dal
      server. Questa struttura semplifica l'organizzazione del codice e rende il
      flusso di dati e l'interfaccia utente più intuitivi da gestire.
    </aside>
  </section>
</section>

<style>
  .code-height {
    height: 500px;
  }
</style>
