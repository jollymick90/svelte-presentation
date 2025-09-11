<script>
  import { bglightBackgroundRadial } from "../common.svelte";

</script>
<section data-auto-animate data-background-gradient={bglightBackgroundRadial}>
    <div class="layout">
        <span class="word fragment"
        data-fragment-index="0" data-id="compiletimetitle"
        >Compile Time</span>
        <span class="definition fragment"
         data-fragment-index="3">The moment when the source code is <b>transformed</b> into another form (eg, TS - JS)</span>
    </div>
    <div class="layout">
        <span class="word fragment"
         data-fragment-index="1" data-id="runtimetitle"
        >Runtime</span>
        <span class="definition fragment"
        data-fragment-index="4"
        >The moment when the app is <b>loaded</b> and <b>executed</b> in an environment (eg: browser)</span>
    </div>
    <div class="layout">
        <span class="word fragment"
        data-fragment-index="2" data-id="executiontitle"
        >Execution Time</span>
        <span class="definition fragment"
        data-fragment-index="5"
        >The moment during runtime when a specific function or block of code is being <b>executed</b></span>
    </div>
    <aside class="notes">
        Questo è il cuore dell'approccio di Svelte. Mentre altri framework fanno la maggior parte del loro lavoro al runtime (nel browser), Svelte sposta questo carico al compile-time, producendo codice JavaScript puro e ottimizzato che fa meno lavoro possibile per l'utente finale. Svelte sparisce prima che l'app arrivi al browser. Questo è il 'framework che scompare' di cui parla Rich Harris.
    </aside>
</section>
<style>
    .layout {
        color: #32325b;
        display: flex;
        justify-content: start;
        border-bottom: 1px solid #32325b;
        padding-bottom: 20px;
    }
    .word {
        font-weight: bold;
        text-align: start;
        width: 600px;
    }
    .definition {
        text-align: start;
        font-size: 2rem;
    }
</style>