<script lang="ts">
  import { slideStore, summary } from "$lib/slides.svelte";
  
  let Component = summary[slideStore.currentSlideKey];
  console.log(slideStore.currentSlideKey)
</script>

{slideStore.currentSlideKey}
{#if Component}
  <Component></Component>
{/if}