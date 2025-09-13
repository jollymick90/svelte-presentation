<script>
  import { bglightBackgroundRadial } from "../common.svelte";
  import Fa from "svelte-fa";
  import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
</script>

<section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
  <p data-id="cap"><Fa size="3x" icon={faGraduationCap} /></p>
  <div class="layout">
    <span
      class="word fragment"
      data-fragment-index="0"
      data-id="compiletimetitle">Compile Time</span
    >
    <span class="definition fragment" data-fragment-index="3"
      >The moment when the source code is <b>transformed</b> into another form (eg,
      TS - JS)</span
    >
  </div>
  <div class="layout">
    <span class="word fragment" data-fragment-index="1" data-id="runtimetitle"
      >Runtime</span
    >
    <span class="definition fragment" data-fragment-index="4"
      >The moment when the app is <b>loaded</b> and <b>executed</b> in an environment
      (eg: browser)</span
    >
  </div>
  <div class="layout">
    <span class="word fragment" data-fragment-index="2" data-id="executiontitle"
      >Execution Time</span
    >
    <span class="definition fragment" data-fragment-index="5"
      >The moment during runtime when a specific function or block of code is
      being <b>executed</b></span
    >
  </div>
  <aside class="notes">
    Dobbiamo tenere in mente questi tre momenti.
    il momento della compilazione, in cui trasformiamo il codice da un tipo a un altro.
    Sicuramente lo vediamo quando lavoriamo in angular o comunque con typescript
    poi abbiamo il momento di runtime che è composto da un momento di caricamento 
    e un momento di esecuzione
     
  </aside>
</section>

<style>
  .layout {
    color: #FFF;
    display: flex;
    justify-content: start;
    border-bottom: 1px solid #32325b;
    padding-bottom: 20px;
  }
  .word {
    font-weight: bold;
    text-align: start;
    width: 600px;
  }
  .definition {
    text-align: start;
    font-size: 2rem;
  }
</style>
