export const codeDirective = `
<script lang="ts">
  import { fade, fly, slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  .....
</script>

<!-- {@if} / {:else} -->
  <button on:click={() => (showIf = !showIf)}>Toggle</button>
  {#if showIf}
    <p in:fade>Visibile</p>
  {:else}
    <p in:fade>Alternativa</p>
  {/if}

<!-- {@each} (con {:else} e key) -->
  <button on:click={() => (items = [...items, items.length + 1])}>Aggiungi</button>
  <ul>
    {#each items as n (n)}
      <li animate:flip>Elemento {n}</li>
    {:else}
      <li>Nessun elemento</li>
    {/each}
  </ul>

<!-- {@await} -->
  <button disabled={promiseState === 'loading'} on:click={startPromise}>
    {promiseState === 'loading' ? 'Loading…' : 'Load'}
  </button>
  {#await p}
    <p in:fade>Caricamento…</p>
  {:then result}
    <p in:fade>{result}</p>
  {:catch err}
    <p in:fade>Errore: {err?.message}</p>
  {/await}

<!-- class: / style: -->
  <label><input type="checkbox" bind:checked={active} /> active</label>
  <input type="color" bind:value={color} />
  <p class:active={active} style:color={color}>Testo dinamico</p>

<!-- use:action -->
  <input use:autofocus placeholder="Autofocus via action" />

<!-- in: / out: / transition: -->
  <button on:click={() => (showInOut = !showInOut)}>Toggle</button>
  {#if showInOut}
    <p in:fade out:fly={{ y: 40 }}>Fade in / Fly out</p>
  {/if}
  <button on:click={() => (showSlide = !showSlide)}>Slide</button>
  {#if showSlide}
    <p transition:slide>Transizione bidirezionale</p>
  {/if}

<!-- {@html} -->
  <p>{@html raw}</p>ì


<!-- {@debug} -->
  {@debug debugVar}
  <p>Apri la console dev.</p>

<style>
  section { text-align: left; }
  .box { padding: .5rem; border: 1px dashed #999; display: inline-block; }
  .row { display: flex; gap: .5rem; flex-wrap: wrap; }
  .card { padding: .6rem .9rem; border-radius: .6rem; background: #eee; }
  .active { font-weight: 800; text-decoration: underline; }
</style>


`;