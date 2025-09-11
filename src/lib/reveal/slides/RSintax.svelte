<script>
  import ReplEmbed from "$lib/components/tools/ReplEmbed.svelte";
  import { bgSvelteLinear } from "../common.svelte";
  import { codeReactivityDeep03 } from "../store/code-slide-sintassi";
</script>

<section>
  <section data-background-gradient="{bgSvelteLinear}">
    <h3>Learning by Doing</h3>
  </section>
  <section data-background-gradient="{bgSvelteLinear}">
    <h5>Playground</h5>
    <ReplEmbed
      gistId="hello-world"
      file="App.svelte"
      theme="dark"
      height={560}
    />
    <aside class="notes">
    con il playground possiamo provare direttamente
    svelte e vedere anche come vengono trasformati i componenti

    
    {codeReactivityDeep03}
  </aside>
  </section>
  
</section>
