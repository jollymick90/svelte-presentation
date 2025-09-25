<script lang="ts">
  import { onMount } from "svelte";

  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  
  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import "reveal.js/plugin/highlight/monokai.css";
  import ForDummies01 from "$lib/reveal/fordummies/ForDummies01.svelte";
  import ForDummies02 from "$lib/reveal/fordummies/ForDummies02.svelte";

  export const bg = "oklch(47.66% .246 305.88)";

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
    <ForDummies01 />
    <ForDummies02 />
    
    <section data-auto-animate data-background-color={bg}>
      <h2>The Components: "The LEGO Buildings"</h2>

      <aside class="notes">
        The city is made of buildings: a fire station, a grocery store, etc. In
        Angular applications, these 'buildings' are the 'components'. Each
        component has three parts: the 'blueprint' (what it looks like, HTML),
        the 'instructions' (how it works, code), and the 'style' (how it's
        decorated, colors and design). Separating these parts makes the app
        easier to manage and update.
      </aside>
    </section>
    <section data-auto-animate data-background-color={bg}>
      <h2>The Magic: "Real-time Connection" and "Built-in GPS"</h2>
      <aside class="notes">
        Components are not static. Angular uses 'data binding', which is like a
        real-time connection between the app's data and the screen. Imagine a
        spreadsheet that updates itself. Additionally, 'routing' is like a GPS
        that allows you to move from one 'page' to another in the app without
        reloading the entire page. This is why modern apps are so fast and
        fluid.
      </aside>
    </section>
    <section data-auto-animate data-background-color={bg}>
      <h2>The Toolkit: "The Trusted Assistant" and "Hello World"</h2>
      <aside class="notes">
        Developers use a special tool called the Angular CLI. Imagine it as an
        assistant who takes care of all the tedious work. To create a 'Hello
        World' app, the developer tells their assistant: 'Prepare a new LEGO
        set!' and then changes a simple text in the main building's 'blueprint'.
        The assistant takes care of everything else, and the result magically
        appears on the screen.
      </aside>
    </section>
    <section data-auto-animate data-background-color={bg}>
      <h2>Summary and Conclusion</h2>
      <aside class="notes">
        In summary, Angular is not just a programming language. It is a
        structured approach that uses intelligent building blocks, magical
        connections, and a personal assistant to build extraordinary web
        applications. It is a powerful and organized system for building the
        future of the web, one piece at a time.
      </aside>
    </section>
  </div>
</div>
<style>
  .legoimg {
    height: 200px;
    object-fit: scale-down;
  }
</style>