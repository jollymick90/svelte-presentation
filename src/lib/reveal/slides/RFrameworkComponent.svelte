<script lang="ts">
  import { bglightBackgroundRadial } from "../common.svelte";
  import angular from "$lib/assets/img/angular.png";
  import react from "$lib/assets/img/react.png";
  import Fa from "svelte-fa";
  import spaghetticode from "$lib/assets/img/react-spaghetti-code.png";

  import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
  import {
    counterAngularCode,
    counterReactCode,
  } from "../store/code-slide-sintassi";
  import { onMount } from "svelte";
  let visible = $state(false);
  
  function typewriter(node: any, { speed = 1 }: { speed?: number }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t: any) => {
        const i = Math.trunc(text.length * t);

        node.textContent = text.slice(0, i);
        if (i == 8) {
          visible = false;
        }
      },
    };
  }
  function revealPresent(node: HTMLElement, set: (v: boolean) => void) {
    const update = () => set(node.classList.contains("present"));

    // Osserva i cambi della classe sulla section
    const mo = new MutationObserver(update);
    mo.observe(node, { attributes: true, attributeFilter: ["class"] });

    // iniziale e cambio slide via hash
    update();
    const onHash = () => update();
    window.addEventListener("hashchange", onHash);

    return {
      destroy() {
        mo.disconnect();
        window.removeEventListener("hashchange", onHash);
      },
    };
  }
</script>

<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <span><Fa size="3x" icon={faBriefcase} /></span>

  <aside class="notes">La prima webapp</aside>
</section>
<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <p><span><Fa size="3x" icon={faBriefcase} /></span></p>
  <p><img class="w-auto" src={react} alt="reacticon" /></p>
  <aside class="notes">è fatta in React</aside>
</section>

<section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
  <h3><img class="w-auto" src={react} alt="reacticon" /></h3>

  <pre><code data-trim data-noescape data-line-numbers="1-14 | 2-6 | 8-13">
    {counterReactCode}
  </code>
  </pre>
  <aside class="notes">quindi vede - javascript - e html mescolato....</aside>
</section>
<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <h3><img class="w-auto" src={react} alt="reacticon" /></h3>
  <p>JSX</p>
  <p>Virtual DOM</p>
  <p>Web Component</p>
  <aside class="notes">Quindi deve imparare JSX Virtual DOM WebComponent</aside>
</section>
<section
  data-background-gradient={bglightBackgroundRadial}
  use:revealPresent={(v) => (visible = v)}
  data-auto-animate
>
  <h3><img class="w-auto" src={react} alt="reacticon" /></h3>

  {#if visible}
    <p in:typewriter={{ speed: 0.5 }}>Framework</p>
  {/if}
  <aside class="notes">
    Non fa in tempo a chiamarlo Framework, che gli arriva il sonoro
  </aside>
</section>
<section data-background-gradient={bglightBackgroundRadial} data-auto-animate>
  <h3><img class="w-auto" src={react} alt="reacticon" /></h3>
  <h3>React is a LIBRARY</h3>

  <aside class="notes">è una libreria"</aside>
</section>

<section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
  <h2>New Chapter...</h2>
  <img src={spaghetticode} alt="spaghetti-code" />
  <aside class="notes">
    dopo questa batosta e aver ingrovigliato il codice a sufficenza
  </aside>
</section>

<section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
  <h5><img class="w-auto" src={angular} alt="angularicon" /></h5>
  <pre><code
      data-trim
      data-noescape
      data-line-numbers="1-14 | 3-4 | 25-34 | 32 | 6-21">
    {counterAngularCode}
  </code>
  </pre>
  <aside class="notes">
    scopre Angular, - si tranquillizza perché vede un file html e uno css - ma
    si spaventa perché scopre typescript.
  </aside>
</section>

<style>
  .w-auto {
    width: auto;
  }
</style>
