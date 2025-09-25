<script lang="ts">
  import legoIstructions from "$lib/assets/img/lego-istructions.png";
  import cityLego from "$lib/assets/img/city-lego.png";
  import pileLego from "$lib/assets/img/plies-brics.png";
  import nightmare from "$lib/assets/img/nightmare.png";
  import happy from "$lib/assets/img/happy.png";

  export const bg = "oklch(47.66% .246 305.88)";
</script>

<section data-auto-animate data-background-color={bg}>
  <h2>Build LEGO city</h2>
  <img class="fragment" data-fragment-index="1" src={cityLego} alt="citylego" />
  <aside class="notes">Imagine you want to build a LEGO city.</aside>
</section>

<section data-auto-animate data-background-color={bg}>
  <h2>Build LEGO city</h2>
  <h2>Pile of Bricks vs. LEGO Set</h2>
  <div class="pilevsset">
    <p class="flexcustom">
      <img
        class="fragment imglego"
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
    <span>VS</span>
    <p class="flexcustom">
      <img
        class="fragment imglego"
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
  <aside class="notes">You could use a giant pile of loose bricks
    but it would be a nightmare. Angular is like a LEGO set: it gives
    you the right pieces and an instruction manual. This is the concept of a
    'framework'. It provides a basic structure to make development easier,
    faster, and more organized.
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
