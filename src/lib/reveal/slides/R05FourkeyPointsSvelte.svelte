<script>
import { bgSvelteRadial } from "../common.svelte";
</script>


  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <h2 style="color:#FFF">Svelte in 4 key ideas</h2>
    <div class="grid-2x2">
      <div class="card fragment" data-fragment-index="0" data-id="component">
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </div>
      <div class="card fragment" data-fragment-index="1" data-id="compiler">
        <h2>COMPILER</h2>
        <p>but it's also a compiler,</p>
      </div>
      <div class="card fragment" data-fragment-index="2" data-id="meta">
        <h2>META FRAMEWORK</h2>
        <p>and it's also a library of the things that you need when</p>
        <p>you're building an application</p>
      </div>
      <div class="card fragment" data-fragment-index="3" data-id="devstyle">
        <h2>DEVELOPMENT STYLE</h2>
        <p>and a philosophy of building web apps</p>
      </div>
    </div>
    <aside class="notes">
      Possiamo dire che Svelte è:
      - un framework a componenti
      - ma è anche un compilatore
      - è anche un kit per creare un'applicazione, con tutto ciò che ti serve
      - ed è anche una nuova filosofia di sviluppo web
    </aside>

  </section>



<style>
  :root {
    /* --bg: #eaf3ff; */
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
