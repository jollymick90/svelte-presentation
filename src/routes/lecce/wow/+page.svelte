<script lang="ts">
 import { listSlides } from '$lib/slides.svelte' 
</script>
<main>
   {#each listSlides as slide}
    <section>
      {#key slide}
  {@const SC = slide}
  <SC />
{/key}
    </section>
   {/each}
</main>
