<script lang="ts">
  import type { Snippet } from "svelte";

    const props: { dataId: string;
       dimmed?: boolean, focus?: boolean,
        children: Snippet;
        className?: string
      } = $props() 
    const { dataId, dimmed, focus, children, className } = props;
</script>
<div class="{className} card {dimmed ? 'dimmed' : ''} {focus ? 'focus' : ''}" 
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
    padding: 1rem 1.2rem;
    min-height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

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