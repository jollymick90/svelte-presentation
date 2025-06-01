<script lang="ts">
  import { slideStore } from "$lib/slides.svelte";

  console.log(slideStore.currentSlideKey)
</script>

{slideStore.currentSlideKey}
<!-- {#if slideStore.currentComponent}
{@const SC = slideStore.currentComponent}
  <SC></SC>
{/if} -->

{#key slideStore.currentSlideKey}
  {@const SC = slideStore.currentComponent}
  <SC />
{/key}