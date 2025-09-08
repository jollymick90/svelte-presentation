<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";
  import svelteRoutingImg from "$lib/assets/img/svelte-routing-lib.png";

  const bg = "#eaf3ff";
</script>

<section>
  <section data-auto-animate data-background-color={bg}>
    <h2>Svelte Routing</h2>
  </section>
  <section data-auto-animate data-background-color={bg}>
    <div class="layout-routing-slide">
      <h4>svelte routing library</h4>
      <RCardUi dataId="svelte-routing">
        <img src={svelteRoutingImg} alt="svelte kit routing" />
      </RCardUi>
    </div>
  </section>
  <section data-background-color={bg}>
        <div class="layout-routing-slide">
      <h4>svelte kit is routing</h4>
      <RCardUi dataId="svelte-kit-routing">
        Il routing si basa sulla struttura delle cartelle +page.svelte: file di
        UI +page.server.js: data loading lato server +layout.svelte: layout
        persistenti +server.js: endpoint API REST-like
      </RCardUi>
    </div>

  </section>
  <section data-background-color={bg}>
     
    <div class="layout-routing-slide">
      <h4>layout</h4>
      <RCardUi dataId="svelte-kit-routing">
        Il routing si basa sulla struttura delle cartelle +page.svelte: file di
        UI +page.server.js: data loading lato server +layout.svelte: layout
        persistenti +server.js: endpoint API REST-like
      </RCardUi>
    </div>
  </section>
</section>

<style>
  .layout-routing-slide {
    display: flex;
  }
</style>
