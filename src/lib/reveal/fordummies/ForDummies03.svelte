<script lang="ts">
  import Fa from "svelte-fa";

  import hospital from "$lib/assets/img/hospital-structure.png";
  import webpagestructure from "$lib/assets/img/web-page-structure.png";
  import {
    faArchway,
    faCode,
    faHospital,
    faHouse,
    faRoad,
  } from "@fortawesome/free-solid-svg-icons";

  export const bg = "oklch(47.66% .246 305.88)";
</script>

<section data-auto-animate data-background-color={bg}>
  <h2>The Components: The LEGO Buildings</h2>
  <div class="grid-template fragment" data-fragment-index="0">
    <span></span>
    <span>
      <Fa icon={faHospital} />
      <span data-fragment-index="1"><Fa class="fragment" icon={faCode} /></span>
    </span>
    <span></span>

    <span>
      <Fa icon={faHouse} />
      <span data-fragment-index="1"><Fa class="fragment" icon={faCode} /></span>
    </span>
    <span></span>
    <span>
      <Fa icon={faRoad} />
      <span data-fragment-index="1"><Fa class="fragment" icon={faCode} /></span>
    </span>

    <span></span>
    <span>
      <Fa icon={faArchway} />
      <span data-fragment-index="1"><Fa class="fragment" icon={faCode} /></span>
    </span>
    <span></span>
  </div>

  <aside class="notes">
    The city is made of buildings: a hospital, a house, etc. In Angular
    applications, these 'buildings' are the 'components'.
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h2>The Components: The LEGO Buildings</h2>
  <div style="display: flex;">
    <img class="hospitalimage" src={hospital} alt="hospital" />
    <div class="flexcol">
      <p class="textpoint">
        <span>blueprint</span>
        <span style="opacity: 0">what it looks like, HTML</span>
      </p>
      <p class="textpoint">
        <span> instructions</span>
        <span style="opacity: 0">how it works, code</span>
      </p>
      <p class="textpoint">
        <span>style</span>
        <span style="opacity: 0">how it's decorated, style</span>
      </p>
    </div>
  </div>
  <aside class="notes">
    Each component has three parts: the 'blueprint' (what it looks like, HTML),
    the 'instructions' (how it works, code), and the 'style' (how it's
    decorated, colors and design). Separating these parts makes the app easier
    to manage and update.
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h2>The Components: The LEGO Buildings</h2>
  <div style="display: flex;">
    <img class="hospitalimage" src={hospital} alt="hospital" />
    <div class="flexcol">
      <p class="textpoint">
        <span>blueprint</span>
        <span style="opacity: 1;"><i>what it looks like, HTML</i></span>
      </p>
      <p class="textpoint">
        <span>instructions</span>
        <span style="opacity: 1;"><i>how it works, code</i></span>
      </p>
      <p class="textpoint">
        <span >style</span>
        <span style="opacity: 1;"><i>how it's decorated, style</i></span>
      </p>
    </div>
  </div>
  <aside class="notes">
    Each component has three parts: the 'blueprint' (what it looks like, HTML),
    the 'instructions' (how it works, code), and the 'style' (how it's
    decorated, colors and design). Separating these parts makes the app easier
    to manage and update.
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h2>Components build page</h2>
  <div>
    <img class="hostpitalimage" src="{webpagestructure}" alt="webpage"/>
  </div>
  <aside class="notes">
   each component has a purpose and all the components together form the page, our city
  </aside>
</section>


<style>
  .flexcol {
    display: flex;
    flex-direction: column;
  }
  .grid-template {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hospitalimage {
    height: 400px;
    object-fit: scale-down;
  }
  .textpoint {    
    margin: 0 0.5rem 0 0.5rem;
    text-align: start;
  }
  .textpoint span {
    font-size: 1.9rem;
  }
</style>
