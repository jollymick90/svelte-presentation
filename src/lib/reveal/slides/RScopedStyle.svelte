<script>
  import { lightBackground as defaultBackground } from "../common.svelte";

  import { codeStyle01, codeStyle02 } from "../store/code-slide-sintassi";
</script>

<section>
  <section data-auto-animate data-background-color={defaultBackground}>
    <h3>Style</h3>
    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeStyle01}
  </code></pre>
    <aside class="notes">
      Il CSS in un file .svelte è automaticamente isolato al componente. Non
      rischio di rompere altri componenti, non servono classi uniche generate a
      mano o CSS-in-JS. Questo è scoped CSS nativo.
    </aside>
  </section>

  <section data-auto-animate data-background-color={defaultBackground}>
    <h3>Style</h3>
    <p>App.svelte</p>
    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeStyle01}
  </code></pre>
    <p>Nested.svelte</p>
    <pre><code data-trim data-noescape data-line-numbers="1-11">
  {codeStyle02}
  </code></pre>
    <aside class="notes">
      Se ho due componenti e definisco lo stile direttamente sull'elemento h1,
      questo stile verrà applicato solo all'elemento del componente.
    </aside>
  </section>
</section>
