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
  .card h2 {
    margin: 0;
    font-size: clamp(1.6rem, 3.2vw, 2.8rem);
    color: var(--text);
    letter-spacing: 0.02em;
  }
  .card p {
    margin: 0;
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: var(--muted);
  }

  /* stato "dim" per le slide di focus */
  .dimmed {
    opacity: 0.25;
    filter: saturate(0.6);
  }

  /* posizioni iniziali per auto-animate (slide 1) */
  .off-left {
    transform: translateX(-120px);
    opacity: 0;
  }
  .off-right {
    transform: translateX(120px);
    opacity: 0;
  }
  .off-top {
    transform: translateY(-120px);
    opacity: 0;
  }
  .off-bottom {
    transform: translateY(120px);
    opacity: 0;
  }

  /* highlight animato (slide di focus) */
  .focus {
    transform: scale(1.06);
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
    border-color: #2f7dd1;
  }
</style>