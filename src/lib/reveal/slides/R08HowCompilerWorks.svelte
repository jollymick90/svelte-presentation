<script>
  import { bgSvelteLinear } from "../common.svelte";
  import jsBenchImgDemo from "$lib/assets/img/js-framefork-benchmark-github-demo.webp";
  import jsBenchImg from "$lib/assets/img/js-framefork-benchmark-github.webp";
  import jsBenchComp from "$lib/assets/img/benchmark-svelte-solid-vue-angular-react.webp";
  import jsBenchCompMem from "$lib/assets/img/benchmark-svelte-solid-vue-angular-react-mem.webp";
  import jsBenchCompSize from "$lib/assets/img/benchmark-svelte-solid-vue-angular-react-size.webp";
  import svelteLogoBig from "$lib/assets/img/svelte-logo-big.webp";

  import DefinitionCompileRuntime from "./RDefinitionCompileRuntime.svelte";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <img src={svelteLogoBig} alt="svelte logo" />
    <h1 class="fragment" data-fragment-index="0" data-id="performance">
      Performance
    </h1>
    <h1 class="fragment" data-fragment-index="1" data-id="devex">
      Dev Experience
    </h1>

    <aside class="notes">
      Svelte si pone di migliorare due elementi: le performance la dev
      experience
    </aside>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
    <h2 data-id="performance">Performance</h2>
    <h3 class="fragment" data-fragment-index="0" data-id="how">How?</h3>
    <p class="fragment" data-fragment-index="1" data-id="overhead">
      No Overhead
    </p>
    <p class="fragment" data-fragment-index="2" data-id="runtime">No Runtime</p>
    <p class="fragment" data-fragment-index="3" data-id="vanilla">
      Component PURE JS
    </p>
    <aside class="notes">
      Vediamo le performance. Come fa? qual è il cuore che sta alla base di
      performance migliori? IMPORTANTE: Se lo chiedete a un AI o girate in
      qualche Forum troverete questo: - no Overhead - no runtime - componenti
      puri js
    </aside>
  </section>
  <section data-background-gradient={bgSvelteLinear}>
    <h1>HOW?</h1>

    <aside class="notes">
      Ho capito, ma come? Come fa a non avere overhead? e non runtime?
    </aside>
  </section>

  <DefinitionCompileRuntime />
  <section data-background-gradient={bgSvelteLinear}>
    <h1>Compiler</h1>

    <aside class="notes">
     Visti questi elementi ora possiamo andare
      a vedere com'è fatto il compilatore
      per togliere questo effetto magico.
    </aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node">.svelte</div>
      <div class="chevron parse">Parse</div>
      <div class="chevron analyze">Analyze</div>
      <div class="chevron transform">Transform</div>
      <div class="end node">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">
      Questi sono i passaggi che trasformano il file App.svelte in due file:
      App.js e App.css
    </aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node defocus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node defocus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze focus">Analyze</div>
      <div class="chevron transform focus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node defocus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">
      i passaggi fondamentali sono - parsing - analisi - trasformazione
    </aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node defocus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse defocus">Parse</div>
      <div class="chevron analyze defocus">Analyze</div>
      <div class="chevron transform defocus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node defocus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">si parte dal file con estensione .svelte</aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node defocus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze defocus">Analyze</div>
      <div class="chevron transform defocus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node defocus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes"> parsing</aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node defocus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze defocus">Analyze</div>
      <div class="chevron transform defocus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node focus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">
      il parsing 
      genera l'AST (Abstract syntax tree) 
      rappresentazione ad albero della struttura sintattica astratta del testo codice sorgente scritto in un linguaggio formale. Ogni nodo dell'albero denota un costrutto che si verifica nel codice.

      La progettazione di un AST è spesso strettamente collegata alla progettazione di un compilatore e alle sue caratteristiche.
      
      in svelte quello che abbiamo HTML, JS e CSS sono separati ma integrati in un unica
      struttura
    </aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node defocus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze focus">Analyze</div>
      <div class="chevron transform defocus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node focus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">segue la fase di analisi</aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node focus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze focus">Analyze</div>
      <div class="chevron transform defocus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node focus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">
      che genera un modello - The compiler extracts: - Reactive Variables -
      Local/global Scope - Scoped CSS (with hash `.svelte-xyz`) - A complete
      model of the component is built to prepare for transformation
    </aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node focus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze focus">Analyze</div>
      <div class="chevron transform focus">Transform</div>
      <div class="end node defocus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node focus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">infine c'è la parte di trasformazione</aside>
  </section>
  <section
    data-auto-animate
    data-background-gradient={bgSvelteLinear}
    class="svelte-compiler-slide"
  >
    <div class="diagram">
      <!-- Riga TOP: Model -->
      <div class="model node focus">Model</div>

      <!-- Riga MIDDLE: pipeline sinistra -> destra -->
      <div class="start node focus">.svelte</div>
      <div class="chevron parse focus">Parse</div>
      <div class="chevron analyze focus">Analyze</div>
      <div class="chevron transform focus">Transform</div>
      <div class="end node focus">JS CSS<br />Ottimizzato</div>

      <!-- Riga BOTTOM: AST -->
      <div class="ast node focus">AST</div>

      <!-- Connettori -->
      <div class="h-connector start-connector"></div>
      <div class="v-connector ast-connector"></div>
      <div class="h-connector parse-analyze-connector"></div>
      <div class="v-connector model-connector"></div>

      <div class="h-connector analyze-transform-connector"></div>
      <div class="h-connector end-connector"></div>
    </div>
    <aside class="notes">
      - Generates code for Client-Side Rendering (CSR) o Server-Side Rendering
      (SSR). - Output: - App.js: minimal and efficient Javascript code -
      App.css: only the necessary styles, hashed to avoid conflicts - No virtual
      DOM → direct operations on the real DOM.
    </aside>
  </section>
  <section data-background-gradient={bgSvelteLinear}>
    <h1>Vediamo i risultati?</h1>
  </section>

  <section data-background-image={jsBenchImg}>
    <h2>js-framework-benchmark</h2>
  </section>

  <section data-background-image={jsBenchImgDemo}></section>
  <section data-background-image={jsBenchComp}></section>

  <section
    data-background-image={jsBenchCompMem}
    data-background-size="1200px"
  ></section>
  <section
    data-background-image={jsBenchCompSize}
    data-background-size="1200px"
  ></section>
</section>

<style>
  /* Scopo tutto alla singola slide */
  .svelte-compiler-slide {
    --blue: #5e88be; /* frecce */
    --blue-dark: #39669f; /* bordi */
    --box: #e6f0ff; /* box chiari */
    --text: #0c1829;
    --line: #3b6aa7;
  }

  /* Griglia a 3 righe: TOP (model), MIDDLE (pipeline), BOTTOM (AST) */
  .svelte-compiler-slide .diagram {
    position: relative;
    display: grid;
    grid-template-columns: minmax(140px, 1fr) 125px 185px 220px minmax(
        180px,
        1fr
      );
    grid-template-rows: 120px 150px 140px;
    align-items: center;
    justify-items: center;
    gap: 18px 18px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    font-weight: 700;
    color: var(--text);
  }

  /* BOX generici */
  .svelte-compiler-slide .node {
    background: var(--box);
    border: 4px solid var(--blue-dark);
    border-radius: 22px;
    padding: 18px 28px;
    font-size: clamp(18px, 2.1vw, 34px);
    line-height: 1.15;
    text-align: center;
    box-shadow:
      0 2px 0 rgba(0, 0, 0, 0.06),
      inset 0 0 0 2px rgba(255, 255, 255, 0.6);
  }

  /* Posizionamenti sulla griglia */
  .svelte-compiler-slide .model {
    grid-column: 3;
    grid-row: 1;
    padding: 22px 60px;
  }
  .svelte-compiler-slide .start {
    grid-column: 1;
    grid-row: 2;
    padding: 22px 36px;
  }
  .svelte-compiler-slide .end {
    grid-column: 5;
    grid-row: 2;
    padding: 18px 15px;
  }
  .svelte-compiler-slide .ast {
    grid-column: 2;
    grid-row: 3;
    padding: 26px 80px;
  }

  /* Frecce “chevron” */
  .svelte-compiler-slide .chevron {
    grid-row: 2;
    background: linear-gradient(#6f93c4, #5e88be);
    color: #fff;
    border: 4px solid var(--blue-dark);
    border-left-width: 4px;

    padding: 18px 20px;
    border-radius: 12px;
    font-size: clamp(18px, 2.1vw, 34px);
    position: relative;
    box-shadow:
      0 2px 0 rgba(0, 0, 0, 0.08),
      inset 0 0 0 2px rgba(255, 255, 255, 0.25);
  }

  .svelte-compiler-slide .chevron.parse {
    grid-column: 2;
  }
  .svelte-compiler-slide .chevron.analyze {
    grid-column: 3;
  }
  .svelte-compiler-slide .chevron.transform {
    grid-column: 4;
  }

  .svelte-compiler-slide .v-connector,
  .svelte-compiler-slide .h-connector {
    position: absolute;
    background: var(--line);
  }

  .svelte-compiler-slide .ast-connector {
    width: 10px;
    border-radius: 5px;
    left: calc(260px);
    top: calc(230px); /* parte dalla metà della riga 2 */
    height: 120px; /* fino alla riga 3 */
    transform: translateX(-50%);
    z-index: -1;
  }

  /* analyze -> Model (verticale) */
  .svelte-compiler-slide .model-connector {
    width: 10px;
    border-radius: 5px;
    left: 450px;
    top: 80px; /* da metà riga 1 */
    height: 150px; /* fino alla freccia Analyze */
    z-index: -1;
  }

  /* uscita Transform -> box finale (orizzontale corto) */
  .svelte-compiler-slide .analyze-transform-connector {
    height: 10px;
    border-radius: 5px;
    right: 400px;
    top: calc(120px + 75px);
    width: 60px;
    z-index: -1;
  }
  .svelte-compiler-slide .end-connector {
    height: 10px;
    border-radius: 5px;
    right: 170px;
    top: calc(120px + 75px);
    width: 60px;
    z-index: -1;
  }
  /* input from svelte box to parse box (orizzontale corto) */
  .svelte-compiler-slide .start-connector {
    height: 10px;
    border-radius: 5px;
    left: 160px;
    top: calc(120px + 75px);
    width: 60px;
    z-index: -1;
  }
  /* input from svelte box to parse box (orizzontale corto) */
  .svelte-compiler-slide .parse-analyze-connector {
    height: 10px;
    border-radius: 5px;
    left: 300px;
    top: calc(120px + 75px);
    width: 60px;
    z-index: -1;
  }

  .focus {
    opacity: 100%;
  }
  .defocus {
    opacity: 30%;
  }
</style>
