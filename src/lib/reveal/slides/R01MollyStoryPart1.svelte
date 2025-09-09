<script>
  import Fa from "svelte-fa";
  import { defaultBackground, defaultSvelteBackground } from "../common.svelte";
  import {
    faDog,
    faBriefcase,
    faArrowRight,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import R05FrameworkComponent from "./R05FrameworkComponent.svelte";
  import svelteLogoBig from "$lib/assets/img/svelte-logo-big.png";
  import aboutme from "$lib/assets/img/aboutme.png";
</script>

<section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <aside class="notes">Lei...</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <h2>Molly</h2>

    <aside class="notes">è Molly!</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <h2>Molly</h2>
    <h4>Web Site - Frontend developer</h4>
    <aside class="notes">
      e Vuole creare un sito web e diventare frontend developer
    </aside>
  </section>

  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <h2>Molly</h2>
    <h4>Web Site - Frontend developer</h4>
    <h3>What should Molly learn first??</h3>
    <aside class="notes">Cosa dovrebbe imparare?</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h2>HTML</h2>
    <aside class="notes">Html sicuramente</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h2>HTML</h2>
    <h2>CSS</h2>
    <aside class="notes">
      CSS anche, essenziale a meno che non vuoi fare per tutta la vita delle
      slide come le mie
    </aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>

    <h2>HTML</h2>
    <h2>CSS</h2>
    <h2>JS</h2>
    <aside class="notes">e lui, javascript</aside>
  </section>

  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
    </div>
    <aside class="notes">poi che succede? va a lavoro</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faArrowRight} /></span>
    </div>
    <aside class="notes">poi che succede? va a lavoro</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faArrowRight} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
    </div>
    <aside class="notes">poi che succede? va a lavoro</aside>
  </section>
  <R05FrameworkComponent></R05FrameworkComponent>
  <section data-background-color={defaultBackground} data-auto-animate>
    <p><Fa size="3x" icon={faDog} /></p>
    <p>Frontend developer</p>
    <p>What should Molly learn first??</p>
    <h4>HTML</h4>
    <h4>CSS</h4>
    <h4>JS</h4>
    <aside class="notes">
      Torniamo a Molly che vuole fare un sito web e diventare Frontend
      Developer. Cosa altro dovrebbe imparare? scopre i framework e gli arriva
      un coppino da dietro dal collega che dice
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
    <h3>Framework, Library</h3>
    <h3>Component</h3>
    <aside class="notes">e dopo aver duramente imparato html, css</aside>
  </section>

  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
    </div>

    <aside class="notes">e per finire</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
    </div>

    <aside class="notes">sempre a lavoro</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
      <div class="me-overlap">
        <span class="user">
          <Fa size="3x" icon={faUser} />
        </span>
        <div class="aboutmeicon">
          <img class="hidden" src={aboutme} alt="me"/>
        </div>
      </div>
    </div>

    <aside class="notes">incontra un collega</aside>
  </section>
  <section data-background-color={defaultBackground} data-auto-animate>
    <div class="molly-go-to-work">
      <span><Fa size="3x" icon={faDog} /></span>
      <span><Fa size="3x" icon={faBriefcase} /></span>
      <div class="me-overlap">
        <span class="user">
          <Fa size="3x" icon={faUser} />
        </span>
        <div class="aboutmeicon">
          <img class="" src={aboutme} alt="me"/>
        </div>
      </div>
      
    </div>

    <aside class="notes">incontra un collega</aside>
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
  .me-overlap .show {
    position: absolute;
    z-index: 3;
  }
  .me-overlap .aboutmeicon {
    height: 100px;
    width: 100px;
    margin: auto;
      position: absolute;
    z-index: 3;
  }
</style>
