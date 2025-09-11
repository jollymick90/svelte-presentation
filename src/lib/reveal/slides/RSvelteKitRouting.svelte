<script>
  import { bgSvelteLinear } from "../common.svelte";
  import {
    routingDirectoryFolder,
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
    <h4>svelte kit is routing</h4>
    <h3 class="fragment" data-fragment-index="0">filesystem-based router.</h3>
    <p class="fragment" data-fragment-index="1">
      our file structure is your routing configuration
    </p>
    <ul class="fragment" data-fragment-index="2">
      <li>no configuration</li>
      <li>Intuitive and Scalable</li>
      <li>Convention Over Configuration</li>
      <li>Popular in Modern Frameworks</li>
    </ul>
    <aside class="notes">
      Zero Configuration: This is the biggest win. You create a file, and it
      automatically becomes a route. No more boilerplate code like
      app.get('/users', ...) for every single endpoint or page. Intuitive &
      Scalable: It's super easy to understand. If you want a /about page, you
      create an about.js or about.svelte file inside a pages directory. As your
      application grows, your routes stay organized naturally with your file
      system. Convention Over Configuration: This approach relies on clear
      naming conventions. For instance, pages/products/index.js might map to
      /products, and pages/products/[id].js would handle dynamic routes like
      /products/123. Popular in Modern Frameworks: You'll find this pattern
      central to many popular modern web frameworks like Next.js, SvelteKit,
      Nuxt.js, and Remix, which leverage it to simplify development
      significantly.
    </aside>
  </section>
  <section data-audo-animate data-background-gradient={bgSvelteLinear}>
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
