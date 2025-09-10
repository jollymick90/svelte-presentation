<script>
  // import {  defaultBackgroundLight } from "../common.svelte";
  import { lightBackground } from "../common.svelte";

  import {
    codeReactivity01,
    codeReactivity02,
    codeReactivityDeep03,
    codeReactivitySolid,
    codeReacttivityReact,
    codeReacttivitySignal,
    codeReacttivitySignalAngular,
    codeReacttivityVue,
  } from "$lib/reveal/store/code-slide-sintassi";
</script>

<section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p></p>
    </div>
    <aside class="notes">Immagina di avere una lavagna</aside>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p>var numero1 = 10</p>
      <p>var numero2 = 10</p>
    </div>
    <aside class="notes">con dei numeri,</aside>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p>var numero1 = 10</p>
      <p>var numero2 = 10</p>
      <p>
        var <b>TOTAL</b> = <b>numero1</b> + <b>numero2</b>
      </p>
    </div>
    <aside class="notes">
      Se scrivi un'equazione, ad esempio "somma = numero1 + numero2",
    </aside>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p>var numero1 = 10</p>
      <p>var numero2 = 10</p>
      <p>var TOTAL = numero1 + numero2 = <b style="color:lightblue">20</b></p>
    </div>
    <aside class="notes">
      la lavagna non si aggiorna da sola se cambi il valore di numero1.
    </aside>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p>var numero1 = 10</p>
      <p>var numero2 = <b style="color:red">15</b></p>
      <p>var TOTAL = numero1 + numero2 = <b style="color:red">20</b></p>
    </div>
    <aside class="notes">
      Devi cancellare e riscrivere l'intera equazione.
    </aside>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p>var numero1 = 10</p>
      <p>var numero2 = <b>15</b></p>
      <p>var TOTAL = numero1 + numero2 = <b style="color:yellow">__</b></p>
    </div>
    <aside class="notes">
      Devi cancellare e riscrivere l'intera equazione.
    </aside>
  </section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity</h3>
    <div class="blackboard">
      <p>var numero1 = 10</p>
      <p>var numero2 = <b>15</b></p>
      <p>var TOTAL = numero1 + numero2 = <b>25</b></p>
    </div>
    <aside class="notes">
      Devi cancellare e riscrivere l'intera equazione.
    </aside>
  </section>
</section>

<section>
  <section data-auto-animate data-background-color={lightBackground}>
    <h3>Reactivity nei framework</h3>
  </section>
  <!-- framework tradizionali -->

  <section data-auto-animate data-background-color={lightBackground}>
    <h3>React Vue Angular</h3>
    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReacttivityReact}
  </code></pre>
    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReacttivityVue}
  </code></pre>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReacttivitySignalAngular}
  </code></pre>
    <aside class="notes">
      Nei framework tradizionali come React o Vue, le variabili di stato non
      sono intrinsecamente reattive. Per farle reagire a un cambiamento, devi
      usare funzioni specifiche (useState in React, ref o reactive in Vue) per
      creare una "reazione" manuale che aggiorni l'interfaccia utente.
    </aside>
  </section>

  <section data-auto-animate data-background-color={lightBackground}>
    <h3>SOLID PREACT</h3>
    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReactivitySolid}
  </code></pre>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReacttivitySignal}
  </code></pre>
    <aside class="notes">
      Il framework, in pratica, non sa che vuoi aggiornare l'interfaccia utente
      quando modifichi una variabile normale.
    </aside>
  </section>

  <section data-auto-animate data-background-color={lightBackground}>
    <div class="myHeading">
      <h3>Reactivity.svelte</h3>
      <h5>Svelte 3</h5>
    </div>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReactivity01}
  </code></pre>
    <aside class="notes">
      - Ogni variabile è intrinsecamente reattiva. - La reattività in Svelte è
      strettamente legata all'assegnazione delle variabili il compilatore è
      molto intelligente. capisce che questa assegnazione potrebbe cambiare
      l'interfaccia utente. Non hai bisogno di usare funzioni speciali o di
      dichiarare la variabile come "stato". Il compilatore analizza il tuo
      codice e inserisce automaticamente il codice necessario per aggiornare il
      DOM in modo efficiente. Questo è il concetto di "intrinsecamente
      reattiva": la reattività non è un'API che devi usare, ma una
      caratteristica del linguaggio di Svelte.
    </aside>
  </section>

  <section data-auto-animate data-background-color={lightBackground}>
    <div class="myHeading">
      <h3>Reactivity.svelte</h3>
      <h5>Svelte 5 - runes</h5>
    </div>

    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReactivity02}
  </code></pre>
    <aside class="notes">
      Reattività esplicita (con Runes): Svelte 5 introduce un nuovo modello di
      reattività basato sulle "runes" (caratteri runici). La reattività non è
      più implicita, ma deve essere dichiarata esplicitamente usando funzioni
      speciali che iniziano con $, come $state(). Per esempio, let count =
      $state(0);. Vantaggi: Questo approccio risolve i limiti di Svelte 3. Le
      variabili create con le runes sono reattive ovunque, anche in file .js
      normali, non solo all'interno dei componenti Svelte. Questo rende la
      reattività più prevedibile e "universale". La reattività di Svelte 5 è
      basata sui signals, un concetto reso popolare da altri framework come
      SolidJS, che permette aggiornamenti molto più efficienti e "granulari".
    </aside>
  </section>
  <section data-background-color={lightBackground}>
    <h3>Svelte 5 - Runes</h3>

    <aside class="notes">
      da adesso farò sempre riferimento a svelte 5. La sintassi di svelte 3 ha
      senso conoscerla solo per - quel poco che c'è di codice legacy - codice
      generato da AI spesso è automaticamente in svelte 3
    </aside>
  </section>
  <section data-background-color={lightBackground}>
<h3>Svelte 5 - Deep Reactivity</h3>
     <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeReactivityDeep03}
  </code></pre>
  <aside class="notes">
    Con la rune $derived, possiamo creare un valore che dipende da altre variabili reattive. Il totale si aggiorna automaticamente ogni volta che l'array numbers cambia, anche se la modifica avviene con un metodo come push.
  </aside>
  </section>
</section>

<style>
  .blackboard {
    /* Sfondo nero della lavagna */
    background-color: #000;

    /* Bordo bianco */
    border: 5px solid #fff;

    /* Opzionale: aggiunge un po' di spazio interno e arrotonda gli angoli */
    padding: 20px;
    border-radius: 8px;

    /* Opzionale: imposta il colore del testo su un grigio chiaro per simulare il gesso */
    color: #ccc;

    /* Opzionale: imposta un font che somigli a una scrittura a mano */
    font-family: "Handlee", cursive;
  }
</style>
