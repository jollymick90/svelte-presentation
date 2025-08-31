<script>
   const bg = "#dfeaf6";
</script>
<section data-background-color={bg}>
<div class="slide">
  <div class="timeline">
    <!-- 2013 -->
    <div class="year-col">
      <div class="center">
        <div class="chevron">2013</div>
      </div>
      <div class="center">
        <div class="bubble b-2013">Reactivity.is</div>
      </div>
    </div>

    <!-- 2016 -->
    <div class="year-col">
      <div class="center">
        <div class="chevron">2016</div>
      </div>
      <div class="center">
        <div class="bubble b-2016">
          Svelte 1.0 — <span class="muted">first release</span>
        </div>
      </div>
    </div>

    <!-- 2018 -->
    <div class="year-col">
      <div class="center">
        <div class="chevron">2018</div>
      </div>
      <div class="center">
        <div class="bubble b-2018">Svelte 2.0</div>
      </div>
    </div>

    <!-- 2019 -->
    <div class="year-col">
      <div class="center">
        <div class="chevron">2019</div>
      </div>
      <div class="center">
        <div class="bubble b-2019a">
          Svelte 3.0 — <span class="accent">compiler</span>
        </div>
      </div>
      <div class="center">
        <div class="bubble b-2019b">
          <span class="accent">Rethinking reactivity</span>
        </div>
      </div>
    </div>

    <!-- 2023 -->
    <div class="year-col">
      <div class="center">
        <div class="chevron">2023</div>
      </div>
      <div class="center">
        <div class="bubble b-2023">Svelte 4.0</div>
      </div>
    </div>

    <!-- 2024 -->
    <div class="year-col">
      <div class="center">
        <div class="chevron">2024</div>
      </div>
      <div class="center">
        <div class="bubble b-2024">
          Svelte 5.0 — <span class="accent">runes</span>
        </div>
      </div>
    </div>
  </div>

  <div class="quote">
    <span class="strong">FRAMEWORKS</span> are not tools for organizing your
    code, they are tools <span class="spaced">for organizing your mind</span>
  </div>
</div>
</section>
<style>
   :root{
    --bg: #dfeaf6;
    --chev: #6e93c5;
    --chev-dark:#4e6f9e;
    --text: #0f2a47;
    --bubble-bg:#f6fbff;
    --bubble-bd:#8fb3df;
    --accent:#2b66c3;
  }
   section {
    margin:0;
    font: 22px/1.25 system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    color:var(--text);
    background:var(--bg);
  }
  /* ====== Layout ====== */
  .slide {
    
    margin: 24px auto 32px;
    padding: 24px 24px 80px;
    position: relative;
  }
  .timeline {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 28px;
    align-items: start;
    position: relative;
    margin-bottom: 48px;
  }

  /* vertical guide lines under each year */
  .year-col {
    position: relative;
    min-height: 220px; /* space for labels below */
  }
  .year-col::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 78px; /* start under the chevron */
    width: 2px;
    height: 160px;
    transform: translateX(-50%);
    background: rgba(79, 112, 159, 0.45);
  }

  /* ====== Year chevrons ====== */
  .chevron {
    position: relative;
    display: inline-block;
    padding: 18px 24px;
    background: linear-gradient(180deg, var(--chev), var(--chev-dark));
    color: #fff;
    font-weight: 800;
    letter-spacing: 0.5px;
    border-radius: 10px;
    filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.12));
  }
  .chevron::before,
  .chevron::after {
    content: "";
    position: absolute;
    top: 0;
    width: 34px;
    height: 100%;
    background: inherit;
  }
  /* left notch */
  .chevron::before {
    left: -22px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    border-radius: 10px 0 0 10px;
    filter: drop-shadow(-1px 0 0 rgba(0, 0, 0, 0.08));
  }
  /* right arrow tip */
  .chevron::after {
    right: -34px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    border-radius: 0 10px 10px 0;
    filter: drop-shadow(1px 0 0 rgba(0, 0, 0, 0.12));
  }

  /* ====== Bubble labels ====== */
  .bubble {
    display: inline-block;
    background: var(--bubble-bg);
    border: 3px solid var(--bubble-bd);
    border-radius: 12px;
    padding: 10px 16px;
    font-weight: 700;
    white-space: nowrap;
    filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.06));
  }
  .bubble .muted {
    opacity: 0.9;
    font-weight: 600;
  }
  .bubble .accent {
    color: var(--accent);
    font-weight: 800;
  }

  /* Positions of the bubbles under each year (tweak as needed) */
  .b-2013 {
    margin-top: 24px;
  }
  .b-2016 {
    margin-top: 120px;
  }
  .b-2018 {
    margin-top: 40px;
  }
  .b-2019a {
    margin-top: 44px;
  }
  .b-2019b {
    margin-top: 116px;
  }
  .b-2023 {
    margin-top: 36px;
  }
  .b-2024 {
    margin-top: 44px;
  }

  /* Quote bar */
  .quote {
    position: relative;
    margin-top: 36px;
    background: #e8f1fb;
    border: 3px solid var(--bubble-bd);
    border-radius: 14px;
    padding: 18px 22px;
    font-weight: 800;
    letter-spacing: 0.2px;
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);
  }
  .quote .spaced {
    word-spacing: 2px;
  }
  .quote .strong {
    color: #000;
  }

  /* Small helper for center alignment inside each column */
  .center {
    display: flex;
    justify-content: center;
  }

  /* ====== Responsiveness ====== */
  @media (max-width: 950px) {
    .timeline {
      gap: 18px;
    }
    .chevron {
      font-size: 18px;
      padding: 14px 18px;
    }
    .chevron::after {
      right: -28px;
      width: 28px;
    }
    .chevron::before {
      left: -18px;
      width: 28px;
    }
    .year-col {
      min-height: 260px;
    }
    .bubble {
      font-size: 18px;
    }
  }
  @media (max-width: 720px) {
    body {
      font-size: 18px;
    }
    .timeline {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 36px;
    }
    .year-col:nth-child(n)::after {
      height: 180px;
    }
  }
</style>
