<script>
  import RCardUi from "$lib/components/reveal/RCardUI.svelte";

  const bg = "#eaf3ff";
</script>

<!-- SLIDE 1: stato iniziale (oggetti fuori schermo) -->

<!-- <section data-auto-animate data-background-color={bg}>
    <h2>Svelte Part</h2>
  <div class="grid-2x2">
    <div class="card off-left" data-id="component">
      <h2>COMPONENT</h2>
      <p>It's a component framework,</p>
    </div>
    <div class="card off-right" data-id="compiler">
      <h2>COMPILER</h2>
      <p>but it's also a compiler,</p>
    </div>
    <div class="card off-bottom" data-id="meta">
      <h2>META FRAMEWORK</h2>
      <p>and it's also a library of the things that you need when</p>
      <p>you're building an application</p>
    </div>
    <div class="card off-top" data-id="devstyle">
      <h2>DEVELOPMENT STYLE</h2>
      <p>and a philosophy of building web apps</p>
    </div>
  </div>
</section> -->

<!-- SLIDE 2: ingresso con auto-animate + fragments (stagger) -->
<section>
  <section data-auto-animate data-background-color={bg}>
    <h2>Svelte Part</h2>
    <div class="grid-2x2">
      <div class="card fragment" data-fragment-index="0" data-id="component">
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </div>
      <div class="card fragment" data-fragment-index="1" data-id="compiler">
        <h2>COMPILER</h2>
        <p>but it's also a compiler,</p>
      </div>
      <div class="card fragment" data-fragment-index="2" data-id="meta">
        <h2>META FRAMEWORK</h2>
        <p>and it's also a library of the things that you need when</p>
        <p>you're building an application</p>
      </div>
      <div class="card fragment" data-fragment-index="3" data-id="devstyle">
        <h2>DEVELOPMENT STYLE</h2>
        <p>and a philosophy of building web apps</p>
      </div>
    </div>
  </section>

  <!-- SLIDE 3: focus su COMPONENT -->
  <section data-auto-animate data-background-color={bg}>
    <div class="grid-2x2">
      <div class="card focus" data-id="component">
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </div>
      <div class="card dimmed" data-id="compiler">
        <h2>COMPILER</h2>
        <p>but it's also a compiler,</p>
      </div>
      <div class="card dimmed" data-id="meta">
        <h2>META FRAMEWORK</h2>
        <p>and it's also a library of the things that you need when</p>
        <p>you're building an application</p>
      </div>
      <div class="card dimmed" data-id="devstyle">
        <h2>DEVELOPMENT STYLE</h2>
        <p>and a philosophy of building web apps</p>
      </div>
    </div>
  </section>

  <!-- SLIDE 4: focus su COMPILER -->
  <section data-auto-animate data-background-color={bg}>
    <div class="grid-2x2">
      <div class="card dimmed" data-id="component">
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </div>
      <div class="card focus" data-id="compiler">
        <h2>COMPILER</h2>
        <p>but it's also a compiler,</p>
      </div>
      <div class="card dimmed" data-id="meta">
        <h2>META FRAMEWORK</h2>
        <p>and it's also a library of the things that you need when</p>
        <p>you're building an application</p>
      </div>
      <div class="card dimmed" data-id="devstyle">
        <h2>DEVELOPMENT STYLE</h2>
        <p>and a philosophy of building web apps</p>
      </div>
    </div>
  </section>

  <!-- SLIDE 5: focus su META FRAMEWORK -->
  <section data-auto-animate data-background-color={bg}>
    <div class="grid-2x2">
      <RCardUi dataId="component" dimmed={true} >
                
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </RCardUi>
      <!-- <div class="card dimmed" data-id="component">
        
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </div> -->
      <div class="card dimmed" data-id="compiler">
        <h2>COMPILER</h2>
        <p>but it's also a compiler,</p>
      </div>
      <div class="card focus" data-id="meta">
        <h2>META FRAMEWORK</h2>
        <p>and it's also a library of the things that you need when</p>
        <p>you're building an application</p>
      </div>
      <div class="card dimmed" data-id="devstyle">
        <h2>DEVELOPMENT STYLE</h2>
        <p>and a philosophy of building web apps</p>
      </div>
    </div>
  </section>

  <!-- SLIDE 6: focus su DEVELOPMENT STYLE -->
  <section data-auto-animate data-background-color={bg}>
    <div class="grid-2x2">
      <div class="card dimmed" data-id="component">
        <h2>COMPONENT</h2>
        <p>It's a component framework,</p>
      </div>
      <div class="card dimmed" data-id="compiler">
        <h2>COMPILER</h2>
        <p>but it's also a compiler,</p>
      </div>
      <div class="card dimmed" data-id="meta">
        <h2>META FRAMEWORK</h2>
        <p>and it's also a library of the things that you need when</p>
        <p>you're building an application</p>
      </div>
      <div class="card focus" data-id="devstyle">
        <h2>DEVELOPMENT STYLE</h2>
        <p>and a philosophy of building web apps</p>
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

  /* un po' di respiro */
  .r-stack .grid-2x2 {
    width: 90%;
    margin: 0 auto;
  }
</style>
