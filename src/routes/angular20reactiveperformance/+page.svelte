<script lang="ts">
  import { onMount } from "svelte";

  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";

  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import "reveal.js/plugin/highlight/monokai.css";

  import bacaroLogoLong from '$lib/assets/img/BacaroLogo2.webp';


  export const bg = "#32325b";

  const { showNotes = false } = $props();

  onMount(async () => {
    const deck = new Reveal({
      autoAnimateEasing: "ease-out",
      autoAnimateDuration: 1,
      autoAnimateUnmatched: false,
      hash: true,
      controls: true,
      progress: true,
      showNotes: true
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
   <section data-background-color={bg}>
                <div class="custom-title-container">
                    <h1>
                        <span class="title-part-1">Titolo in</span>
                        <span class="title-part-2">Due Colori</span>
                    </h1>
                </div>
                <img src="{bacaroLogoLong}" class="icona-top-right" alt="logo" />
            </section>

            <section data-background-color={bg}>
                <h2>Scritte Principali</h2>
                <p>Questo è il testo principale della tua diapositiva. Puoi aggiungere qui i tuoi contenuti, liste, o altri elementi.</p>
                <ul>
                    <li>Punto elenco 1</li>
                    <li>Punto elenco 2</li>
                    <li>Punto elenco 3</li>
                </ul>
            </section>
  </div>
</div>
<style>
.reveal {
  background-color: #32325b; /* Sostituisci con il colore che preferisci */
}
/* Stile per le due parti del titolo */
.title-part-1 {
  color: #FFFFFF; /* Sostituisci con il primo colore */
}

.title-part-2 {
  color: #FFA07A; /* Sostituisci con il secondo colore */
}

/* Stile per il font del titolo */
.reveal h1 {
  font-family: "Georgia", serif; /* Sostituisci con il font che preferisci */
}

/* Stile per l'icona in alto a destra */
.icona-top-right {
  position: absolute;
  top: 20px;
  right: 20px;
  max-width: 50px;
  z-index: 10;
}
</style>
