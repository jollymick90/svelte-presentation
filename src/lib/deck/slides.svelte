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
  onMount(() => {
    const deck = new Reveal({
        autoAnimateEasing: 'ease',
        autoAnimateDuration: 1,
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
        
        <RevSlide id={"one"} animate>
            <Title />
        </RevSlide>
        <RevSlide animate>
            <Agenda />
        </RevSlide>
        <RevSlide>
            <OtherFrameworkComponent></OtherFrameworkComponent>
        </RevSlide>
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


