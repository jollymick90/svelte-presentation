<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";
  const bg = "#eaf3ff";
</script>

<section>
<section data-auto-animate data-background-color={bg}>
  <h2>Svelte Kit</h2>
</section>
<section data-auto-animate data-background-color={bg}>
  <h3>Svelte Kit</h3>
  <div class="grid-layout-4">
<RCardUi dataId="routing" focus={true}>
  <span>Helps yout write less code</span>
  </RCardUi>
  <RCardUi dataId="routing" focus={true}>
  <span>Helps guides you with smart conventions</span>
  </RCardUi>
  <RCardUi dataId="routing" focus={true}>
  <span>Free you from boilerplate setup</span>
  </RCardUi>
  <RCardUi dataId="routing" focus={true}>
  <span>Official framework built on svelte</span>
  </RCardUi>
  </div>
</section>

</section>


<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-layout-4 {
     display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
