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
    <div class="grid-layout-4">
      <RCardUi className="fragment" dataId="routing">
        <span>Helps yout write less code</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing">
        <span>Helps guides you with smart conventions</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing">
        <span>Free you from boilerplate setup</span>
      </RCardUi>
      <RCardUi className="fragment" dataId="routing">
        <span>Official framework built on svelte</span>
      </RCardUi>
    </div>
  </section>
</section>

<style>
  span {
    color: #0b2a4a;
  }
  .grid-layout-4 {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
