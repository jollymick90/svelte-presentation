<script>
  import { bgSvelteLinear } from "../common.svelte";

</script>

<section>
  <section
    data-auto-animate
    data-background-gradient="{bgSvelteLinear}"
  >
    <!-- <h2 style="color:#0b2a4a">Final Thoughts</h2> -->
    <h2 style="color:#FFF">Key Takeaways</h2>
    <div class="grid-2x2">
      <div class="card fragment" data-fragment-index="0" data-id="component">
        <h2>Svelte VS Other</h2>
        <p class="fragment">NextJS</p>
        <p class="fragment">NuxtJS</p>
        <p class="fragment">Angular</p>
      </div>
      <div class="card fragment" data-fragment-index="1" data-id="compiler">
        <h2>Ecosystem</h2>
        <p class="fragment">UI Component Library</p>
        <p class="fragment">State Managment</p>
        <p class="fragment">Styling</p>
      </div>
      <div class="card fragment" data-fragment-index="2" data-id="meta">
        <h2>Production</h2>
        <p class="fragment">Enterprise</p>
        <p class="fragment">???</p>
      </div>
      <div class="card fragment"  data-id="devstyle">
        <h2>It's time to try it out.</h2>
       
      </div>

    </div>

    <aside class="notes">
      Qui affrontiamo la domanda più grande. La scelta tra Svelte e Next.js è una scelta di filosofia. Svelte agisce come un compilatore: fa tutto il lavoro in anticipo, prima che il codice arrivi al browser. Il risultato è un codice leggero e super-veloce che non ha overhead a runtime. Next.js, invece, è costruito su React. Usa un Virtual DOM per gestire gli aggiornamenti, il che lo rende molto potente ma introduce un    

runtime e un bundle iniziale più grande. La sua forza non è la velocità intrinseca, ma la vastità dell'ecosistema che ha creato".


https://hackmd.io/@roguegpu/r1RKQMdt3

L'ecosistema è un fattore cruciale. Next.js, grazie alla sua base su React, ha un vantaggio enorme in termini di risorse. Se ti serve una soluzione per un problema specifico, quasi certamente esiste già un pacchetto pronto all'uso. Svelte ha una comunità più piccola, ma non è una debolezza. SvelteKit è una soluzione 'con le batterie incluse': molte delle funzionalità per cui React ha bisogno di librerie esterne, come il routing o la gestione dello stato, sono già integrate in Svelte. Questo elimina la 'fatica decisionale' e ti permette di concentrarti subito sulla creazione del prodotto, riducendo anche le dipendenze esterne

    </aside>
  </section>
</section>

<style>
  :root {
    --bg: #eaf3ff;
    --card-bg: #f7fbff;
    --card-border: #6aa4e0;
    --card-shadow: rgba(0, 0, 0, 0.12);
    --text: #0b2a4a;
    --muted: #153a5f;
  }

  .grid-2x2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.2rem;
    align-items: stretch;
  }

  /* card */
  .card {
    background: var(--card-bg);
    border: 2px solid var(--card-border);
    border-radius: 22px;
    box-shadow: 0 8px 16px var(--card-shadow);
    padding: 0.9rem 1.1rem;
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
    transform-origin: center;
  }
  .card h2 {
    margin: 0;
    font-size: 2.8rem;  /*clamp(1.6rem, 3.2vw, 2.8rem);*/
    color: var(--text);
    letter-spacing: 0.02em;
  }
  .card p {
    margin: 0;
    font-style: italic;
    font-size: 1.9rem; /*clamp(1rem, 4vw, 1.9rem);*/
    color: var(--muted);
  }
</style>
