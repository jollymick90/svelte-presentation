<script lang="ts">
  import aboutme from "$lib/assets/img/aboutme.png";
  import angular from "$lib/assets/img/angular.png";
  import java from "$lib/assets/img/java.png";
  import js from "$lib/assets/img/js.png";
  import svelte from "$lib/assets/img/svelte.png";
  import vue from "$lib/assets/img/vue.png";
  import react from "$lib/assets/img/react.png";
  import { defaultBackground } from "../common.svelte";
  import bacarologo from "$lib/assets/img/BacaroLogo.png";
</script>

<section data-auto-animate data-background-color={defaultBackground}>
  <div class="c-flex">
    <div class="">
      <img src={aboutme} alt="micheleimg" />
    </div>
  </div>
    <aside class="notes">
    io
  </aside>
</section>
<section data-auto-animate data-background-color={defaultBackground}>
  <div class="c-flex">
    <div class="">
      <img src={aboutme} alt="micheleimg" />
    </div>
    <div class="c-flex c-flex-col p-2 gap-5">
      <p class="text-4xl">Michele Scarpa</p>
    </div>
  </div>
    <aside class="notes">
    sono michele
  </aside>
</section>
<section data-auto-animate data-background-color={defaultBackground}>
  <div class="c-flex">
    <div class="">
      <img src={aboutme} alt="micheleimg" />
    </div>
    <div class="c-flex c-flex-col p-2 gap-5">
      <p class="text-4xl">Michele Scarpa</p>
      <p class="text-4xl">Software Engineer - Web Developer</p>
    </div>
  </div>
      <aside class="notes">
    Software Engineer e sviluppatore web
  </aside>
</section>
<section data-auto-animate data-background-color={defaultBackground}>
  <div class="c-flex">
    <div class="">
      <img src={aboutme} alt="micheleimg" />
    </div>
    <div class="c-flex c-flex-col p-2 gap-5">
      <p class="text-4xl">Michele Scarpa</p>
      <p class="text-4xl">Software Engineer - Web Developer</p>
      <div class="c-flex gap-2">
        <img class="w-auto h-10" src={angular} alt="angularicon" />
        <img class="w-auto h-10" src={java} alt="javaicon" />
        <img class="w-auto h-10" src={js} alt="jsicon" />
        <img class="w-auto h-10" src={svelte} alt="svelteicon" />
        <img class="w-auto h-10" src={react} alt="reacticon" />
        <img class="w-auto h-10" src={vue} alt="vueicon" />
      </div>
    </div>
  </div>
        <aside class="notes">
    sono appassionato del mondo web e non solo
  </aside>
</section>
<section data-auto-animate data-background-color={defaultBackground}>
  <div class="myHeading">
    <h1>Bacaro Tech</h1>
    <img class="bacaroicon" src={bacarologo} alt="bacarologo" />
  </div>
    <aside class="notes">
    Inoltre, Ho aiutato a fondare e faccio parte di Bacarotech
  </aside>
</section>

<section data-auto-animate data-background-color={defaultBackground}>
  <div class="myHeading">
    <h1>Bacaro Tech</h1>
    <img class="bacaroicon" src={bacarologo} alt="bacarologo" />
  </div>


  <pre><code data-trim data-noescape
    data-line-numbers="1 | 3-6 | 8-11 | 13-16 | 18-21 | 23-25'"
    >
  {` class Bacarotech { 

      team = [
      "Giorgio", "Michele", "Moreno",
      "Lorenzo", "Davide", "Danilo", "Antonio"
      ]

      techologies = [
       'frontend', 'backend', 'DotNet',  
       'AI', 'DevOps', 'kotlin', '...'
      ] 

      social = [
      'instagram', 'youtube', 
      'tiktok', 'linkedin'
      ]

      eventi = [
      'speaker', 'interviste', 
      'media partner', 'podcast'
      ]

      giveMeSomethings() {
       return {"Spritz", "Polpetta"}
      }


     }
   `}
  </code></pre>
  <aside class="notes">
    ho anche il piacere di presentarvi Bacarotech.
    - Cos'è?
    - un team di persone,
    - appassionate di diverse tecnologie,
    - che fanno contenuti su diverse piattaforme social 
    - e partecipano a diversi eventi
    - il tutto cercando di tenere lo spirito di un luogo tipico
      della zona di Veneta. è una particolare osteria del veneziano
      dove vengono serviti 'ombre' (vino) e 'cichetti' (cibo)
  
  </aside>
</section>

<style>
  :root {
    --spacing: 0.3rem;
  }

  .myHeading img {
    margin-right: 10px;
  }
  .myHeading h1,
  .myHeading img {
    display: inline-block;
    vertical-align: middle;
  }

  .c-flex {
    display: flex;
  }
  .c-flex-col {
    flex-direction: column;
  }

  .bacaroicon {
    height: 100px;
    margin-top: 0px;
  }
  .h-10 {
    height: calc(var(--spacing) * 10) /* 2.5rem = 40px */;
  }
  .p-2 {
    padding: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5) /* 1.25rem = 20px */;
  }
  .w-auto {
    width: auto;
  }
</style>
