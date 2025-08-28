<script lang="ts">
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  import { onMount } from "svelte";

   import 'reveal.js/dist/reveal.css';
   import 'reveal.js/dist/theme/black.css'
   import 'reveal.js/plugin/highlight/monokai.css'
  import Title from "$lib/components/slides/intro/Title.svelte";
  import AboutMe from "$lib/components/slides/intro/AboutMe.svelte";
  import RevSlide from "$lib/components/reveal/RevSlide.svelte";
  import { Agenda } from "$lib/components/slides/intro";
  import { OtherFrameworkComponent } from "$lib/components/slides/whatis";
  import FrameworkComponent from "$lib/components/slides/rev/FrameworkComponent.svelte";
  import DefinitionSvelte from "$lib/components/slides/rev/DefinitionSvelte.svelte";
  onMount(() => {
    const deck = new Reveal({
        autoAnimateEasing: 'ease-out',
        autoAnimateDuration: 1,
         autoAnimateUnmatched: false,
        hash: true,
        controls: true,
        progress: true
    });
    deck.initialize({
        plugins: [Markdown, Highlight, Notes]
    });
  });
</script>

<div class="reveal">
    <div class="slides">
        <section data-auto-animate>
  <h1>Auto-Animate</h1>
</section>
<section data-auto-animate>
  <h1 style="margin-top: 100px; color: red;">Auto-Animate</h1>
</section>
        <RevSlide id={"one"} animate>
            <Title />
        </RevSlide>
        <RevSlide animate>
            <Agenda />
        </RevSlide>
        <DefinitionSvelte />
        <FrameworkComponent />
        <RevSlide id={"two"} animate>
            <AboutMe />
        </RevSlide>
        <RevSlide animate>
            <div>Auto Animate</div>
        </RevSlide>
        <RevSlide animate>
            <div class="text-red-600 mt-8">Auto Animate</div>
        </RevSlide>
    </div>
</div>


