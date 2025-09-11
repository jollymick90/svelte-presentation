<script>
  import Fa from "svelte-fa";
  import { bglightBackgroundRadial, defaultSvelteBackground } from "../common.svelte";
  import {
    faDog,
    faBriefcase,
    faArrowRight,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import R05FrameworkComponent from "./RFrameworkComponent.svelte";
  import svelteLogoBig from "$lib/assets/img/svelte-logo-big.webp";
  import aboutme from "$lib/assets/img/aboutme.webp";
</script>

<section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <aside class="notes">Lei...</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <h2>Molly</h2>

    <aside class="notes">
      è Molly! In questa presentazione, non parleremo solo di Svelte,
    </aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <h2>Molly</h2>
    <h4>Web Site - Frontend developer</h4>
    <aside class="notes">
      ma seguiremo il viaggio di Molly, una giovane sviluppatrice che affronta
      le sfide del mondo del frontend
    </aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <h2>Molly</h2>
    <h4>Web Site - Frontend developer</h4>
    <h3>What should Molly learn first??</h3>
    <aside class="notes">
      Cosa dovrebbe imparare? Se c'è qualcuno in sala con qualche primavera alle
      spalle, provi a pensare a quali tasselli fondamentali dovrebbe conoscere.
    </aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h2>HTML</h2>
    <aside class="notes">Html sicuramente</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h2>HTML</h2>
    <h2>CSS</h2>
    <aside class="notes">
      CSS. essenziale, a meno che non vogliate fare per tutta la vita delle
      slide come queste
    </aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h2>HTML</h2>
    <h2>CSS</h2>
    <h2>JS</h2>
    <aside class="notes">javascript - l'elefante nella stanza</aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
    </div>
    <aside class="notes">poi che succede?</aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faArrowRight} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
    </div>
    <aside class="notes">Molly va a lavoro e mette in pratica...</aside>
  </section>
  <R05FrameworkComponent></R05FrameworkComponent>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <p>Frontend developer</p>
    <p>What should Molly learn first??</p>
    <h4>HTML</h4>
    <h4>CSS</h4>
    <h4>JS</h4>
    <aside class="notes">
      Torniamo a Molly e alla lista delle cose da imparare per diventare
      Frontend Developer.
    </aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <p>Web Site / Frontend developer</p>
    <h4 class="shadow">HTML, CSS, JS</h4>
    <h3>Typescript</h3>
    <aside class="notes">aggiungiamo Typescript</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <p>Web Site / Frontend developer</p>
    <h4 class="shadow">HTML, CSS, JS, TS</h4>
    <h3>Framework</h3>
    <aside class="notes">aggiungiamo i framework</aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <p>Web Site / Frontend developer</p>
    <h4 class="shadow">HTML, CSS, JS, TS</h4>
    <h3>Framework</h3>
    <h3>Library</h3>

    <aside class="notes">aggiungiamo libreria</aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h4 class="shadow">HTML, CSS, JS, TS</h4>
    <h3>Framework, Library</h3>
    <h3>Component</h3>
    <aside class="notes">aggiungiamo Componente</aside>
  </section>

  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <div class="full">
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
    </div>
</div>
    <aside class="notes">Poi Torna a lavoro</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <div class="full">
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
      <div class="me-overlap">
        <span class="user">
          <Fa size="3x" icon={faUser} />
        </span>
        <div class="aboutmeicon">
          <img class="hidden" src={aboutme} alt="me" />
        </div>
      </div>
    </div>
</div>
    <aside class="notes">incontra un collega</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
     <div class="full">
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>

      <div class="me-overlap">
        <span class="user">
          <Fa size="3x" icon={faUser} />
        </span>
        <div class="aboutmeicon">
          <img class="" src={aboutme} alt="me" />
        </div>
      </div>
    </div>
</div>
    <aside class="notes">me</aside>
  </section>
  <section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
    <div class="full">
    <div class="balloon">
      <span>Try a new framework!</span>
    </div>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>

      <div class="me-overlap">
        <span class="user">
          <Fa size="3x" icon={faUser} />
        </span>
        <div class="aboutmeicon">
          <img class="" src={aboutme} alt="me" />
        </div>
      </div>
    </div>
</div>
    <aside class="notes">
      incontra un collega che gli dice di provare un nuovo framework
    </aside>
  </section>
  <section data-background-color={defaultSvelteBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <h2>Change your frontend developer life</h2>
    </div>

    <aside class="notes">che gli suggerisce di studiare svelte</aside>
  </section>

  <section data-background-color={defaultSvelteBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <img src={svelteLogoBig} alt="logo svelte" />
    </div>

    <aside class="notes">che gli suggerisce di studiare svelte</aside>
  </section>
</section>

<style>
  .molly-go-to-work {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .me-overlap {
    position: relative;
  }
  .me-overlap .user {
    position: absolute;
    z-index: 1;
  }
  .me-overlap .hidden {
    opacity: 0;
  }
  .me-overlap .aboutmeicon {
    height: 100px;
    width: 100px;
    margin: auto;
    position: absolute;
    z-index: 3;
  }
  .full {
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .balloon {
    border: 2px solid black;
    background-color: white;
    position: absolute;
    right: 0;
    top: 0;
    padding: 4px;
    color: black;
    border-radius: 100%;
    width: 300px;
  }
 
</style>
