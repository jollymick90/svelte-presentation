<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";

  const bg = "#eaf3ff";
</script>
<section>
  <section data-auto-animate data-background-color={bg}>
      <h2>Svelte Kit Application</h2>
  </section>
    <section data-auto-animate data-background-color={bg}>
      <RCardUi dataId="creation">
        npx sv create bacaro-svelte
      </RCardUi>
  </section>
</section>