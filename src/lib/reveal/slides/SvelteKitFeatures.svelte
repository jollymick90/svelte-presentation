<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";
  import { bgSvelteLinear } from "../common.svelte";

</script>

<section>
<section data-auto-animate data-background-gradient={bgSvelteLinear}>
  <h2>Svelte Kit</h2>
</section>

<section data-auto-animate data-background-gradient={bgSvelteLinear}>
  <h3>Svelte Kit</h3>
  <h2>Features</h2>
  <div class="grid-layout">
    <RCardUi dataId="routing" dimmed={true}>
      <span>Routing</span>
    </RCardUi>

    <RCardUi dataId="routing" dimmed={true}>
      <span>Typescript Integration</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Service worker</span>
    </RCardUi>

    <RCardUi dataId="routing" dimmed={true}>
      <span>Server-side Rendering</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Static Site Generation</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Client-side Rendering</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Hydration</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Data fetching</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Library packaging</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>optimised production builds</span>
    </RCardUi>
    <RCardUi dataId="routing" dimmed={true}>
      <span>Deploying to different hosting provider </span>
    </RCardUi>
  </div>
</section>
</section>


<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

</style>
