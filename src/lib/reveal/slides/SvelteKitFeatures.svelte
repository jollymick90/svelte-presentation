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
    <div class="grid-layout">
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Routing</span>
      </RCardUi>

      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Typescript Integration</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Service worker</span>
      </RCardUi>

      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Server-side Rendering</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Static Site Generation</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Client-side Rendering</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Hydration</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Data fetching</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Library packaging</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Optimised production builds</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>Deploying to different hosting provider </span>
      </RCardUi>
            <RCardUi className="fragment" dataId="routing" dimmed={true}>
        <span>....</span>
      </RCardUi>
    </div>
  </section>
</section>

<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  span {
    color: #0b2a4a;
  }
</style>
