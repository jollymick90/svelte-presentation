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
    <div class="c-flex c-flex-col p-2 gap-5">
      <p class="text-4xl">Michele Scarpa</p>
    </div>
  </div>
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
        <img class="w-auto h-10" src={java} alt="java" />
        <img class="w-auto h-10" src={js} alt="angularicon" />
        <img class="w-auto h-10" src={svelte} alt="angularicon" />
        <img class="w-auto h-10" src={react} alt="angularicon" />
        <img class="w-auto h-10" src={vue} alt="angularicon" />
      </div>
    </div>
  </div>
</section>

<section data-auto-animate data-background-color={defaultBackground}>
  <div class="myHeading">
    <h1>Bacaro Tech</h1>
    <img class="bacaroicon" src={bacarologo} alt="bacarologo" />
  </div>

  <pre><code data-trim data-noescape>
    {` <h1>Team</h1>`}
  </code></pre>

  <pre><code data-trim data-noescape>
  {` class Tecnhology { 
      list = [
       'frontend', 'backend', 'c++',  'AI', 'docker', 'kotlin',
        '...'
      ] 
     }
   `}
  </code></pre>

  <pre><code data-trim data-noescape>
  {` def social_media = ['instagram', 'youtube', 'tiktok', 'linkedin']`}
  </code></pre>

  <pre><code data-trim data-noescape>
  {` 
  public class Main {
  public static void main(String[] args) {
     System.out.println("Workshops");
    }
  }
  `}
  </code></pre>
  <pre><code data-trim data-noescape>
  
  {`
  var riversArray = arrayOf("Speakers", "Media Partner", "Events")
  `}
  </code></pre>
  <pre><code data-trim data-noescape>
    {`
    FROM bacarostyle:venetian as build
    WORKDIR fun
    
    RUN do-wrong-repeat-again

    ENTRYPOINT ["Giorgio", "Michele", "Moreno", "...."]
    `}
  
  </code></pre>
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
