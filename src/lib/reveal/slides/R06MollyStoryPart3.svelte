<script>
  import Fa from "svelte-fa";
  import { defaultBackground } from "../common.svelte";
  import {
    faDog,
    faBriefcase,
    faArrowRight,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
</script>

<section data-background-color={defaultBackground} data-auto-animate>
  <p><Fa size="3x" icon={faUser} /></p>
  <p>
     Frontend developer
  </p>
  <p>What should Molly learn first??</p>
  <h4>HTML</h4>
  <h4>CSS</h4>
  <h4>JS</h4>
  <aside class="notes">
    Torniamo a Molly che vuole fare un sito web e diventare Frontend Developer.
    Cosa altro dovrebbe imparare? scopre i framework e gli arriva un coppino da
    dietro dal collega che dice
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
  <p><Fa size="3x" icon={faDog} /></p>
  <p>Web Site / Frontend developer</p>
  <h4 class="shadow">HTML, CSS, JS</h4>
  <h3>Typescript</h3>
  <aside class="notes">scopre Typescript</aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
  <p><Fa size="3x" icon={faDog} /></p>
  <p>Web Site / Frontend developer</p>
  <h4 class="shadow">HTML, CSS, JS, TS</h4>
  <h3>Framework</h3>
  <aside class="notes">scopre i framework</aside>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
  <p><Fa size="3x" icon={faDog} /></p>
  <p>Web Site / Frontend developer</p>
  <h4 class="shadow">HTML, CSS, JS, TS</h4>
  <h3>Framework</h3>
  <h3>Library</h3>

  <aside class="notes">
    scopre i framework scopre che react non è un framework ma una libreria
  </aside>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
  <p><Fa size="3x" icon={faDog} /></p>

  <h4 class="shadow">HTML, CSS, JS, TS</h4>
  <h3>Framework</h3>
  <h3>Library</h3>
  <h3>Web Component</h3>
  <aside class="notes">e dopo aver duramente imparato html, css</aside>
</section>

<style>
  .shadow {
    color: #a7a4a434;
  }
</style>
