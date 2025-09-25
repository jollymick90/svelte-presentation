<script lang="ts">
  import { faAngular } from "@fortawesome/free-brands-svg-icons";
  import Fa from "svelte-fa";

  import lego from "$lib/assets/img/lego-pieces.png";

  export const bg = "oklch(47.66% .246 305.88)";
</script>

<section data-auto-animate data-background-color={bg}>
  <h1>
    <span><Fa icon={faAngular} /></span>

    Angular <span style="opacity: 0;">for Dummies</span>
  </h1>
  <aside class="notes">
    Hi everyone! Today I'm going to talk to you about Angular, but don't worry.
    I know nobody knows Computer Science stuff
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h1 style="margin-top: 100px;">
    <span><Fa icon={faAngular} /></span>
    Angular <span style="opacity: 1; color: plum;">for Dummies</span>
  </h1>
  <aside class="notes">
    I've prepared a beginner's guide, a kind of 'Angular for Dummies'
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h1>
    <span><Fa icon={faAngular} /></span>
    Angular <span style="opacity: 1;">for Dummies</span>
  </h1>
  <p>
    <span class="fragment" data-fragment-index="0">
        <b>What it Is</b>
    </span>
    <span class="fragment" data-fragment-index="1">
        <i>without Nerd Words</i>
    </span>
  </p>
  <p>
    <span class="fragment" data-fragment-index="2">
        <b>Why It's so important</b>
    </span>
    <span class="fragment" data-fragment-index="3">
        <i>using little blocks </i>
    </span>
  </p>
  <p>
    <img
      class="fragment legoimg"
      data-fragment-index="4"
      src={lego}
      alt="lego"
    />
  </p>

  <aside class="notes">
    which will explain what it is without getting into technical details
    and why it's so important, by some analogies, like somethings that everybody played when were young
  </aside>
</section>
<style>
  .legoimg {
    height: 200px;
    object-fit: scale-down;
  }
</style>
