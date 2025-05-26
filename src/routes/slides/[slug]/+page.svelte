<script lang="ts">
  import { page } from "$app/state";
  import { list, type SlideKeys } from "$lib/slides";
  const currentPage: number = +page.params.slug;
    
  let Component = list[currentPage as SlideKeys];
  
console.log(currentPage, Component, list)
</script>

{#if Component}
  <Component></Component>
{/if}