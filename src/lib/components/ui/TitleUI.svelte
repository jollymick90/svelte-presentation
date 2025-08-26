<script lang="ts">
    const { titles }: { titles: string[]} = $props()
</script>
<div>
    {#each titles as title }
        <h1>{title}</h1>
    {/each}  
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: var(--font-size-title-slide, 3rem);
    font-weight: bold;
    text-align: center;
  }
</style>
