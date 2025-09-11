<script>
  import { bglightBackgroundRadial } from "../common.svelte";
  import Fa from "svelte-fa";

  import { faDog, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
</script>

<section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p data-id="cap"><Fa size="3x" icon={faGraduationCap} /></p>
    <p data-id="dog"><Fa size="3x" icon={faDog} /></p>
    <aside class="notes">
      Abbiamo parecchia carne al fuoco in questo momento e per Molly è giunto il
      momento di fare un piccolo inciso. Spero che anche per voi possa tornare
      utile
    </aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p data-id="cap"><Fa size="3x" icon={faGraduationCap} /></p>

    <h5 data-id="library">Library ?</h5>

    <h5 data-id="framework">Framework ?</h5>

    <aside class="notes">Cos'è una libreria? e che cos'è un framework?</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p data-id="cap"><Fa size="3x" icon={faGraduationCap} /></p>

    <h5 data-id="library">Library</h5>
    <p class="definition">
      <i
        >A library is a collection of code, data, or tools created to be reused
        by different programs, instead of rewriting the same functionality from
        scratch.</i
      >
    </p>
    <h5  data-id="framework">Framework</h5>
    <p class="definition">
      <i
        >A reusable structure for software development. A framework is a
        predesigned structure that provides a foundation for building
        applications. It defines how different components should interact,
        offering reusable patterns and conventions.</i
      >
    </p>
    <aside class="notes">
      Una libreria è una collezione di codice, dati, tools, etc, creati per
      essere riusati in diversi programmi, al posto di riscrivere le stesse
      funzionalità un framework ha sempre lo scopo di farci evitare di rifare
      certi passaggi. ma è una struttura più complessa ed è il framework che ha
      preso delle decisioni per noi e in generale definisce come usare gli
      strumenti a nostra disposizione
    </aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p data-id="cap"><Fa size="3x" icon={faGraduationCap} /></p>
    <h3 data-id="library">Library vs Framework</h3>
    <p><u>Library</u> <b>→ Developer CALL library</b></p>
    <p>
      <u>Framework</u> <b>→ Don't call us, we'll call you</b>
      <br /><span class="small">Hollywood Principle</span>
    </p>
    <aside class="notes">
      Con una libreria, sei tu a chiamare il codice. Tu sviluppatore hai il
      controllo. Con un framework, è il framework che ha il controllo e chiama
      il tuo codice. Questo è il 'Principio di Hollywood' altro: A library
      provides optional, plug-and-play functionality. The developer stays in
      control and decides when and how to call the library's functions. A
      framework defines the overall structure and flow of an application. It is
      in control, and decides when and how to call the developer's code (and, if
      needed, specific libraries)
    </aside>
  </section>

</section>

<style>
  .definition {
    font-size: 1.5rem;
  }
  .small {
    font-size: 1.5rem;
  }
</style>
