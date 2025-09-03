<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";

  const bg = "#eaf3ff";
</script>
<section>
  <section data-auto-animate data-background-color={bg}>
      <h2>Svelte Routing</h2>
  </section>
    <section data-auto-animate data-background-color={bg}>
      <RCardUi dataId="creation">
        Il routing si basa sulla struttura delle cartelle
+page.svelte: file di UI 
+page.server.js: data loading lato server  
+layout.svelte: layout persistenti  
+server.js: endpoint API REST-like

      </RCardUi>
  </section>
</section>