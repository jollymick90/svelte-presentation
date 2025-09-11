<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";
  import { bgSvelteLinear } from "../common.svelte";

</script>
<section>
  <section data-auto-animate data-background-gradient={bgSvelteLinear}>
      <h2>Svelte Kit Application</h2>
  </section>
    <section data-auto-animate data-background-gradient={bgSvelteLinear}>
      <RCardUi dataId="creation">
        npx sv create bacaro-svelte
      </RCardUi>
  </section>
</section>