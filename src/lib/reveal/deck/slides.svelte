<script lang="ts">
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  import { onMount } from "svelte";

  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import "reveal.js/plugin/highlight/monokai.css";  
    
  import R05FrameworkComponent from "$lib/reveal/slides/R05FrameworkComponent.svelte";
  import R00WelcomeSlide from "../slides/R00WelcomeSlide.svelte";
  import R01MollyStoryPart1 from "../slides/R01MollyStoryPart1.svelte";
  import R04MollyStoryPart2 from "../slides/R04MollyStoryPart2.svelte";
  import R06MollyStoryPart3 from "../slides/R06MollyStoryPart3.svelte";
  import R03IntroSlide from "../slides/R03IntroSlide.svelte";
  import R02AgendaSlide from "../slides/R02AgendaSlide.svelte";
  import R0BaseDefinitions from "../slides/R0BaseDefinitions.svelte";
  import R07DefinitionSvelte from "../slides/R07DefinitionSvelte.svelte";
  import R08SvelteIntroduction from "../slides/R08SvelteIntroduction.svelte";
  import R09HistorySvelte from "../slides/R09HistorySvelte.svelte";
  import RHowCompilerWorks from "../slides/RHowCompilerWorks.svelte";
  import RFirstComponent from "../slides/RFirstComponent.svelte";
  import DefinitionCompileRuntime from "../slides/DefinitionCompileRuntime.svelte";
  import SvelteKitPresentation from "../slides/SvelteKitPresentation.svelte";
  import RSvelteKitCreate from "../slides/RSvelteKitCreate.svelte";
  import RSvelteKitRouting from "../slides/RSvelteKitRouting.svelte";
  import RSintassiSvelte from "../slides/RSintassiSvelte.svelte";

  onMount(async () => {
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
    <R00WelcomeSlide />   
    <R01MollyStoryPart1 />
    <R03IntroSlide />
    <R02AgendaSlide />    
    <R07DefinitionSvelte />
    <R08SvelteIntroduction />
    <R09HistorySvelte />
    <RSintassiSvelte />
    <RHowCompilerWorks />
    <R0BaseDefinitions />
    <DefinitionCompileRuntime />
    <SvelteKitPresentation />
    <RSvelteKitCreate />
    <RSvelteKitRouting />
  </div>
</div>
