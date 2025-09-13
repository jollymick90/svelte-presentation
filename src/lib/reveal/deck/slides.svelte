<script lang="ts">
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  import { onMount } from "svelte";

  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import "reveal.js/plugin/highlight/monokai.css";  
    
  import R00WelcomeSlide from "../slides/R00WelcomeSlide.svelte";
  import R01MollyStoryPart1 from "../slides/R01MollyStoryPart1.svelte";
  
  import R02IntroSlide from "../slides/R02IntroSlide.svelte";
  import R03AgendaSlide from "../slides/R03AgendaSlide.svelte";
  import R06BaseDefinitions from "../slides/R06BaseDefinitions.svelte";
  import R04DefinitionSvelte from "../slides/R04DefinitionSvelte.svelte";
  import R05FourkeyPointsSvelte from "../slides/R05FourkeyPointsSvelte.svelte";
  import R07HistorySvelte from "../slides/R07HistorySvelte.svelte";
  import R08HowCompilerWorks from "../slides/R08HowCompilerWorks.svelte";
  import SvelteKitPresentation from "../slides/SvelteKitPresentation.svelte";
  import RSvelteKitCreate from "../slides/RSvelteKitCreate.svelte";
  import RSvelteKitRouting from "../slides/RSvelteKitRouting.svelte";
  import RHowToWrite from "../slides/RHowToWrite.svelte";
  import RSintax from "../slides/RSintax.svelte";
  import RReactivity from "../slides/RReactivity.svelte";
  import RScopedStyle from "../slides/RScopedStyle.svelte";
  import SvelteKitFeatures from "../slides/SvelteKitFeatures.svelte";
  import RBindingDirective from "../slides/RBindingDirective.svelte";
  import RKitDataLoading from "../slides/RKitDataLoading.svelte";
  import RConclusion from "../slides/RConclusion.svelte";
  import RSlideFrameworkLibraryCompar from "../slides/RSlideFrameworkLibraryCompar.svelte";
  import RKitPageConfiguration from "../slides/RKitPageConfiguration.svelte";
  import RThanksIntro from "../slides/RThanksIntro.svelte";
  import RThanksOut from "../slides/RThanksOut.svelte";
  
  const { showNotes = false } = $props();
  
  onMount(async () => {
    const deck = new Reveal({
      autoAnimateEasing: "ease-out",
      autoAnimateDuration: 1,
      autoAnimateUnmatched: false,
      hash: true,
      controls: true,
      progress: true,
      //showNotes: showNotes ? 'separate-page' : false
    });
    // Reveal.configure({ showNotes: true });
    deck.initialize({
      plugins: [Markdown, Highlight, Notes],
    });
  });  
</script>

<div class="reveal">
  <div class="slides">
    
    <R00WelcomeSlide />   
    <R01MollyStoryPart1 />
    <R02IntroSlide />
    <R03AgendaSlide />    
    <R04DefinitionSvelte />
    <R05FourkeyPointsSvelte />
    <R06BaseDefinitions />
    <R07HistorySvelte />
    <R08HowCompilerWorks />
    <RHowToWrite />
    <RScopedStyle />
    <RReactivity />
    <RBindingDirective />
    <RSintax />
    <SvelteKitPresentation />
    <RSvelteKitCreate />
    <RSvelteKitRouting />
    <RKitPageConfiguration />
    <RKitDataLoading />
    <SvelteKitFeatures />
   <RConclusion />
   <RThanksOut />
  </div>
</div>
