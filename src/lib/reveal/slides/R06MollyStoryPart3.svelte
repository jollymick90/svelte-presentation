<script>
  import Fa from "svelte-fa";
  import { defaultBackground } from "../common.svelte";
  import { faDog, faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

</script>

<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    <h2>Molly</h2>
    <h4>Web Site / Frontend developer</h4>
    <h3>What should Molly learn first??</h3>
    <aside class="notes">
    Torniamo a Molly che vuole fare un sito web 
    e diventare Frontend Developer. 
    Cosa altro dovrebbe imparare?
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    <h3>HTML</h3>
    <h3>CSS</h3>
    <h3>JS</h3>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    <h3 class="shadow">HTML</h3>
    <h3 class="shadow">CSS</h3>
    <h3 class="shadow">JS</h3>
    <h3>Framework</h3>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    
    <h3 class="shadow">HTML, CSS, JS</h3>    
    <h3>Framework</h3>
    <h3>Library</h3>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    
    <h3 class="shadow">HTML, CSS, JS</h3>    
    <h3>Framework</h3>
    <h3>Library</h3>
    <h3>Web Component</h3>
</section>
<style>
  .shadow {
     color: #A7A4A434
  }

</style>
