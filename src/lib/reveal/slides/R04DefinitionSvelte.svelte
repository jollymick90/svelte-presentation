<script lang="ts">
  import angular from "$lib/assets/img/angular.webp";
  import react from "$lib/assets/img/react.webp";
  import vue from "$lib/assets/img/vue.webp";
  import { bgSvelteRadial } from "../common.svelte";
  
  import emozionante1 from "$lib/assets/img/emozionante1.webp";
  import emozionante2 from "$lib/assets/img/love-letter.webp";
  import emozionante3 from "$lib/assets/img/emozione-meme-1.gif";
</script>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <h1>Svelte</h1>
  </section>
  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <p>
      Svelte is a UI framework that uses a compiler to let you write
      breathtakingly concise components
    </p>
    <p>
      that do minimal work in the browser, using languages you already know —
    </p>
    <p>HTML, CSS and JS.</p>
    <p>It's a love letter to web development.</p>
    <aside class="notes">
      che utilizza un compilatore per permetterti di scrivere componenti incredibilmente concisi che svolgono un lavoro minimo nel browser, usando linguaggi che già conosci
      HTML, CSS e JS. È una lettera d'amore allo sviluppo web.
    </aside>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <p>
      Svelte is a UI framework that uses a compiler to let you write
      <b style="color: #edfb73">breathtakingly</b> concise components
    </p>
    <p>
      that do minimal work in the browser, using languages you already know —
    </p>
    <p>HTML, CSS and JS.</p>
    <p>It's a <b style="color: #edfb73">love letter</b> to web development.</p>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <div>
      <p><b style="color: #edfb73">breathtakingly / love letter</b></p>
    </div>
  </section>
  
  <section data-auto-animate data-background-image={emozionante1}>

  </section>
  <section data-auto-animate data-background-image={emozionante2}>

  </section>

  <section data-auto-animate data-background-image={emozionante3}>

    <h3>A Friday production release!</h3>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <h4 class="focus">
      Have you ever seen words like <b style="color: #edfb73">breathtakingly</b>
       or <b style="color: #edfb73">love letter</b> used in technical documentation?     
    </h4>
    <aside class="notes">
      avete mai visto usare le parole 'mozzafiato' o 'lettera d'amore' in una documentazione tecnica?
    </aside>
  </section>
  
  <section
    data-auto-animate
    data-background-gradient="radial-gradient(circle, #dd0031, #c3002f, #333 100%)"
  >
    <img class="w-auto h-10" src={angular} alt="angularicon" />
    <h4 class="focus">
      Angular is a web framework that empowers developers to build fast,
      reliable applications.
    </h4>
  </section>

  <section
    data-auto-animate
    data-background-gradient="radial-gradient(circle, #61DAFB, #20232A, #333 100%)"
  >
    <h4 class="defocus">
      Angular is a web framework that empowers developers to build fast,
      reliable applications.
    </h4>

    <img class="w-auto h-10" src={react} alt="reacticon" />
    <h4 class="focus">The library for web and native user interfaces</h4>
  </section>

  <section
    data-auto-animate
    data-background-gradient="linear-gradient(45deg, #42b883, #35495e)"
  >
    <h4 class="defocus">
      Angular is a web framework that empowers developers to build fast,
      reliable applications.
    </h4>
    <img class="w-auto h-10" src={vue} alt="angularicon" />

    <h4 class="focus">易学易用，性能出色，适用场景丰富的 Web 前端框架。</h4>
  </section>

  <section
    data-auto-animate
    data-background-gradient="linear-gradient(45deg, #42b883, #35495e)"
  >
    <h4 class="defocus">
      Angular is a web framework that empowers developers to build fast,
      reliable applications.
    </h4>
    <h4 class="defocus">The library for web and native user interfaces</h4>
    <img class="w-auto h-10" src={vue} alt="angularicon" />

    <h4 class="focus">
      Un framework accessibile, performante e versatile per la creazione di
      interfacce utente web.
    </h4>
  </section>
</section>

<section>
  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <p>
      <span style="color: #FFFFFF"
        >Svelte is a UI framework that uses a compiler to let you write
        breathtakingly concise components that do minimal work in the browser,
        using languages you already know — HTML, CSS and JS. It's a love letter
        to web development.
      </span>
    </p>
    <aside class="notes">
      la vera parola che introduce una novità nel panorama dei framework per
      interfacce grafiche è
    </aside>
  </section>

  <section data-auto-animate data-background-gradient={bgSvelteRadial}>
    <p>
      <span style="color: #5E5D5D"> Svelte is a UI framework that uses a </span>
      <b style="color: #edfb73; font-size: 4rem">compiler </b>
      <span style="color: #5E5D5D">
        to let you write breathtakingly concise components that do minimal work
        in the browser, using languages you already know — HTML, CSS and JS.
        It's a love letter to web development.</span
      >
    </p>
    <aside class="notes">
      Compilatore.
      e non è una semplice build. 
      

    </aside>
  </section>
</section>

<style>
  .focus {
    font-size: 3rem;
  }
  .defocus {
    font-size: 0.9rem;
    color: #3f3f3f6e;
  }
</style>
