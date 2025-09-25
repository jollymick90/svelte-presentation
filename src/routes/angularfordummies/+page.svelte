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
  import ForDummies03 from "$lib/reveal/fordummies/ForDummies03.svelte";
  import ForDummies04 from "$lib/reveal/fordummies/ForDummies04.svelte";

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

    <ForDummies03 />
    <ForDummies04 />

    <section data-auto-animate data-background-color={bg}>
      <h2>The Toolkit: The Trusted Assistant and Hello World</h2>
      <p class="fragment">
        CLI: Common Line Interface
        <span class="fragment"> - You Say Angular DO</span>
      </p>
      <p class="fragment">
        CLI: How you can use?
        <span class="fragment">
          - Boilerplate: prebuilt a simple and little city</span
        >
      </p>
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
      <h2>The Universe of Computing: Where is Angular</h2>
      <p class="fragment">
        Imagine all of computing
        <span class="fragment"> - as a vast universe</span>
      </p>
      <div class="fragment" style="display:flex">
        <span>We have different galaxie</span>

        <ul>
          <li class="fragment">- 'Operating Systems'</li>
           <li class="fragment">- '...'</li>
          <li class="fragment">- 'Databases'</li>
           <li class="fragment">- '...'</li>
          <li class="fragment">- 'Webapplication'</li>
          <li class="fragment">- '...'</li>
          <li class="fragment">- 'Angular'</li>
        </ul>
      </div>
      <aside class="notes">
        To understand where Angular fits, let's think bigger. Imagine all of
        computing as a vast universe. We have different galaxies, like
        'Operating Systems' or 'Databases'. Within this universe, there's a
        vibrant galaxy called 'Web Applications'. This is where Angular truly
        shines! It's one of the brightest stars in the constellation of tools
        used to build interactive and dynamic websites that run right in your
        browser."
      </aside>
    </section>
    <section data-auto-animate data-background-color={bg}>
      <h2>Summary and Conclusion</h2>
      <p class="fragment">structured approach</p>
      <p class="fragment">intelligent building blocks of web page</p>
      <p class="fragment">help to organize each blocks</p>
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
