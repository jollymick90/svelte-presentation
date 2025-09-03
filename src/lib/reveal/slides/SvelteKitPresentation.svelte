<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";
const bg = "#eaf3ff";
</script>
<section data-auto-animate data-background-color={bg}>
  <h2>Svelte Kit</h2>
</section>
<section data-auto-animate data-background-color={bg}>
  <h3>Svelte Kit</h3>
  <h2>Key Points</h2>
  <p>Helps yout write less code</p>
  <p>Helps guides you with smart conventions</p>
  <p>Free you from boilerplate setup</p>
  <p>Official framework built on svelte</p>
</section>
<section data-auto-animate data-background-color={bg}>
  <h3>Svelte Kit</h3>
  <h2>Features</h2>
  <div class="grid-layout">
    <RCardUi dataId="routing" dimmed={true} >
<span>Routing</span>
    </RCardUi>
    
    <span>Typescript Integration</span>
    <span>Service worker</span>

    <span>Server-side Rendering</span>
    <span>Static Site Generation</span>
    <span>Client-side Rendering</span>
    <span>Hydration</span>
    <span>Data fetching</span>
    <span>Library packaging</span>
    <span>optimised production builds</span>
    <span>Deploying to different hosting provider </span>
  </div>
</section>


<section data-auto-animate data-background-color={bg}>
  <h3>Svelte Kit</h3>
  <h2>Features</h2>
  <div class="grid-layout">
    <RCardUi dataId="routing" focus={true} >
<span>Routing</span>
    </RCardUi>
    
    <span>Typescript Integration</span>
    <span>Service worker</span>

    <span>Server-side Rendering</span>
    <span>Static Site Generation</span>
    <span>Client-side Rendering</span>
    <span>Hydration</span>
    <span>Data fetching</span>
    <span>Library packaging</span>
    <span>optimised production builds</span>
    <span>Deploying to different hosting provider </span>
  </div>
</section>

<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
