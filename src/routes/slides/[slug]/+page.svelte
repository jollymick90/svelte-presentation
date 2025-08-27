<script lang="ts">
  import { browser } from "$app/environment";
  import { slideStore } from "$lib/slides.svelte";

  if (browser)
    console.log(
      `[slides ${slideStore.state.currentSlideKey}] i'm running on browser`
    );
  else
    console.log(
      `[slides ${slideStore.state.currentSlideKey}] i'm running on server`
    );

  // $inspect(slideStore);
</script>
<!-- non funziona -->
<!-- {#if slideStore.currentComponent}
{@const SC = slideStore.currentComponent}
  <SC></SC>
{/if} -->

<!-- funziona -->
{#key slideStore.state.currentSlideKey}
  {@const SC = slideStore.state.currentComponent}
  <SC />
{/key}
