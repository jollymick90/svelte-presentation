<script lang="ts">
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  import { onMount } from "svelte";

  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import "reveal.js/plugin/highlight/monokai.css";
  
    
  import FrameworkComponent from "$lib/reveal/slides/FrameworkComponent.svelte";
  import WelcomeSlide from "../slides/WelcomeSlide.svelte";
  import MollyStory from "../slides/MollyStory.svelte";
  import IntroSlide from "../slides/IntroSlide.svelte";
  import AgendaSlide from "../slides/AgendaSlide.svelte";
  onMount(() => {
    const deck = new Reveal({
      autoAnimateEasing: "ease-out",
      autoAnimateDuration: 1,
      autoAnimateUnmatched: false,
      hash: true,
      controls: true,
      progress: true,
    });
    deck.initialize({
      plugins: [Markdown, Highlight, Notes],
    });
  });
</script>

<div class="reveal">
  <div class="slides">
    <WelcomeSlide />   
    <MollyStory />
    <FrameworkComponent />
    <AgendaSlide />
    <IntroSlide />
  </div>
</div>
