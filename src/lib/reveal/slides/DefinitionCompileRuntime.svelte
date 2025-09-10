<script>
  import { lightBackground } from "../common.svelte";

</script>
<section data-background-color={lightBackground}>
    <div class="layout">
        <span class="word">Compile Time</span>
        <span class="definition">The moment when the source code is <b>transformed</b> into another form (eg, TS - JS)</span>
    </div>
    <div class="layout">
        <span class="word">Runtime</span>
        <span class="definition">The moment when the app is <b>loaded</b> and <b>executed</b> in an environment (eg: browser)</span>
    </div>
    <div class="layout">
        <span class="word">Execution Time</span>
        <span class="definition">The moment during runtime when a specific function or block of code is being <b>executed</b></span>
    </div>
    <aside class="notes">
        Questo è il cuore dell'approccio di Svelte. Mentre altri framework fanno la maggior parte del loro lavoro al runtime (nel browser), Svelte sposta questo carico al compile-time, producendo codice JavaScript puro e ottimizzato che fa meno lavoro possibile per l'utente finale. Svelte sparisce prima che l'app arrivi al browser. Questo è il 'framework che scompare' di cui parla Rich Harris.
    </aside>
</section>
<style>
    .layout {
        display: flex;
        justify-content: space-between;
    }
    .word {
        font-weight: bold;
    }
</style>