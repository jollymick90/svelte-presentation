<script>
  import { bglightBackgroundRadial } from "../common.svelte";

</script>

<section>
  <section
    data-auto-animate
    data-background-gradient="{bglightBackgroundRadial}"
  >
    <h2 style="color:#0b2a4a">Key Points</h2>
    <div class="grid-2x2">
      <div class="card fragment" data-fragment-index="0" data-id="component">
        <h2>Key Point 1</h2>
        <p>KeyPoint1</p>
      </div>
      <div class="card fragment" data-fragment-index="1" data-id="compiler">
        <h2>Key Point 1</h2>
        <p>KeyPoint1</p>
      </div>
      <div class="card fragment" data-fragment-index="2" data-id="meta">
        <h2>Key Point 1</h2>
        <p>KeyPoint1</p>
      </div>
      <div class="card fragment" data-fragment-index="3" data-id="devstyle">
        <h2>Key Point 1</h2>
        <p>KeyPoint1</p>
      </div>
    </div>
  </section>
</section>

<style>
  :root {
    --bg: #eaf3ff;
    --card-bg: #f7fbff;
    --card-border: #6aa4e0;
    --card-shadow: rgba(0, 0, 0, 0.12);
    --text: #0b2a4a;
    --muted: #153a5f;
  }

  .grid-2x2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.2rem;
    align-items: stretch;
  }

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
</style>
