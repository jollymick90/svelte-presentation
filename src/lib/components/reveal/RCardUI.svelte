<script lang="ts">
  import type { Snippet } from "svelte";

    const props: { dataId: string; dimmed?: boolean, focus?: boolean, children: Snippet} = $props() 
    const { dataId, dimmed, focus, children } = props;
</script>
<div class="card {dimmed ? 'dimmed' : ''} {focus ? 'focus' : ''}" 
    data-id={dataId}>
    {@render children()}
</div>
<style>
    
  /* card */
  .card {
    background: var(--card-bg);
    border: 2px solid var(--card-border);
    border-radius: 22px;
    box-shadow: 0 8px 16px var(--card-shadow);
    padding: 2rem 2.2rem;
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
    transform-origin: center;
  }
 
  /* stato "dim" per le slide di focus */
  .dimmed {
    opacity: 0.25;
    filter: saturate(0.6);
  }

  
  .focus {
    transform: scale(1.06);
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
    border-color: #2f7dd1;
  }
</style>