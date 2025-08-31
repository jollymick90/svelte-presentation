<script>
  const bg = "#dfeaf6";
</script>

<section data-background-color={bg}>
  <div class="slide">
    <div class="timeline">
      <!-- 2016 -->
      <div class="year-col">
        <div class="center">
          <div class="chevron">2016</div>
        </div>
        <div class="center">
          <div class="bubble b-2016">
            <span>Svelte 1.0 </span>
            <span class="accent">first release</span>
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

      <div class="year-col">
        <div class="center">
          <div class="chevron">2019</div>
        </div>
        <div class="center">
          <div class="bubble b-2019a">
            Svelte 3.0 <span class="accent">compiler</span>
          </div>
        </div>
      </div>

      <div class="year-col">
        <div class="center">
          <div class="chevron">2023</div>
        </div>
        <div class="center">
          <div class="bubble b-2023">Svelte 4.0</div>
        </div>
      </div>

      <div class="year-col">
        <div class="center">
          <div class="chevron">2024</div>
        </div>
        <div class="center">
          <div class="bubble b-2024">
            Svelte 5.0 <span class="accent">runes</span>
          </div>
        </div>
      </div>
    </div>

    <div class="quote">
      <!--  -->
    </div>
  </div>
</section>

<style>
  :root {
    --bg: #dfeaf6;
    --chev: #6e93c5;
    --chev-dark: #4e6f9e;
    --text: #0f2a47;
    --bubble-bg: #f6fbff;
    --bubble-bd: #8fb3df;
    --accent: #2b66c3;
  }
  section {
    margin: 0;
    font:
      22px/1.25 system-ui,
      Segoe UI,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    color: var(--text);
    background: var(--bg);
  }

  .timeline {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    align-items: start;
    position: relative;
    margin-bottom: 48px;
  }

  /* vertical guide lines under each year */
  .year-col {
    position: relative;
    height: 100%;
  }

  /* ====== Year chevrons ====== */
  .chevron {
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    background: linear-gradient(180deg, var(--chev), var(--chev-dark));
    color: #fff;
    font-weight: 800;
    letter-spacing: 0.5px;
    border-radius: 10px;
    filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.12));
  }

  .chevron::before {
    left: -22px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    border-radius: 10px 0 0 10px;
    filter: drop-shadow(-1px 0 0 rgba(0, 0, 0, 0.08));
  }

  /* ====== Bubble labels ====== */
  .bubble {
    display: flex;
    flex-direction: column;
    background: var(--bubble-bg);
    border: 3px solid var(--bubble-bd);
    border-radius: 12px;
    padding: 10px 16px;
    font-weight: 700;
    white-space: nowrap;
    filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.06));
  }

  .bubble .accent {
    color: var(--accent);
    font-weight: 800;
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

  /* Small helper for center alignment inside each column */
  .center {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
</style>
