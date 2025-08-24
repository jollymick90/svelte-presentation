<script lang="ts">
  import { browser } from "$app/environment";
  import { slideStore } from "$lib/slides.svelte";

  console.log(slideStore.currentSlideKey);
  if (browser)
    console.log(
      `[slides ${slideStore.currentSlideKey}] i'm running on browser`
    );
  else
    console.log(`[slides ${slideStore.currentSlideKey}] i'm running on server`);
</script>

{slideStore.currentSlideKey}
<!-- non funziona -->
<!-- {#if slideStore.currentComponent}
{@const SC = slideStore.currentComponent}
  <SC></SC>
{/if} -->

<!-- funziona -->
{#key slideStore.currentSlideKey}
  {@const SC = slideStore.currentComponent}
  <SC />
{/key}
