<script lang="ts">
  import legoIstructions from "$lib/assets/img/lego-istructions.png";
  import cityLego from "$lib/assets/img/city-lego.png";
  import pileLego from "$lib/assets/img/plies-brics.png";
  import nightmare from "$lib/assets/img/nightmare.png";
  import happy from "$lib/assets/img/happy.png";
  import { faAngular } from "@fortawesome/free-brands-svg-icons";
  import Fa from "svelte-fa";

  export const bg = "oklch(47.66% .246 305.88)";
</script>

<section data-auto-animate data-background-color={bg}>
  <h2>Start with definitions</h2>
  <p>
    <span><Fa icon={faAngular} /></span>

    <i>The framework for building scalable web apps with confidence</i>
  </p>
  <aside class="notes">
    we shall start with definitions. Angular is: The framework for building
    scalable web apps with confidence.
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h2>Build LEGO city</h2>
  <img class="fragment" data-fragment-index="1" src={cityLego} alt="citylego" />
  <aside class="notes">
    Imagine you want to build a LEGO city. That city is our web page
  </aside>
</section>

<section data-auto-animate data-background-color={bg}>
  <h2>Build LEGO city</h2>
  <h2>
    <span class="fragment" data-id="pile" data-fragment-index="1"
      >Pile of Bricks
    </span>
    
    <span
      class="fragment imglego"
      data-id="legoIstructions"
      data-fragment-index="3">vs LEGO Set</span
    >
  </h2>
  <div class="pilevsset">
    <p class="flexcustom">
      <img
        class="fragment imglego"
        data-id="pile"
        data-fragment-index="1"
        src={pileLego}
        alt="pile"
      />
      <img
        class="fragment imglego"
        data-fragment-index="2"
        src={nightmare}
        alt="nightmare"
      />
    </p>
    
    <p class="flexcustom">
      <img
        class="fragment imglego"
        data-id="legoIstructions"
        data-fragment-index="3"
        src={legoIstructions}
        alt="pile"
      />
      <img
        class="fragment imglego"
        data-fragment-index="4"
        src={happy}
        alt="happy"
      />
    </p>
  </div>
  <aside class="notes">
    You could use a giant pile of loose bricks but it would be a nightmare.
    Angular is like a LEGO set: it gives you the right pieces and an instruction
    manual. This is the concept of a 'framework'. It provides a basic structure
    to make development easier, faster, and more organized.
  </aside>
</section>

<style>
  .flexcustom {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-self: center;
  }
  .pilevsset {
    height: 250px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-self: center;
  }
  .imglego {
    height: 200px;
    object-fit: scale-down;
  }
</style>
