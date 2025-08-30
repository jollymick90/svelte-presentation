<script>
  import Fa from "svelte-fa";
  import { defaultBackground } from "../common.svelte";
  import { faDog, faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

</script>
<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    <h2>Molly</h2>
    <h4>Web Site / Frontend developer</h4>
    <aside class="notes">
    Torniamo a Molly che vuole fare un sito web 
    e diventare Frontend Developer. 
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    <h2>Molly</h2>
    <h4>Web Site / Frontend developer</h4>
    <h3>What should Molly learn first??</h3>
    <aside class="notes">
    Cosa dovrebbe imparare?
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    
    <h2>HTML</h2>
        <aside class="notes">
    Html sicuramente
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    
    <h2>HTML</h2>
    <h2>CSS</h2>
    <aside class="notes">
    CSS anche, essenziale a meno che non vuoi fare
     per tutta la vita delle slide così
  </aside>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    
    <h2>HTML</h2>
    <h2>CSS</h2>
    <h2>JS</h2>
    <aside class="notes">
    e lui, javascript
  </aside>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog}/></p>
    
    <h2>HTML</h2>
    <h2>CSS</h2>
    <h2>JS</h2>
    <h2>Network/internet</h2>
    <aside class="notes">
    ok dai... anche qualcosa di network e internet
  </aside>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
    <span><Fa size="3x" icon={faDog}/></span>
    <span><Fa size="3x" icon={faArrowRight}/></span>
    <span><Fa size="3x" icon={faBriefcase}/></span>
    </div>
    <aside class="notes">
    poi che succede? va alvoro
  </aside>
  
</section>

<style> 
  .molly-go-to-work {
    display: flex;
    gap: 10px
  }
</style>
