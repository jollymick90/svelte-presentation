<script  lang="ts">
  // Importiamo il compilatore di Svelte e i lifecycle di Svelte 5
  import { compile } from 'svelte/compiler';
  import { buildHtmlPage, createBootstrapScriptContent, createIframeHtml, initialCode } from './local-utils';

  // Codice Svelte 5 di esempio che usa i "runes" ($state)
  let code = $state(initialCode);
    let iframeReady = $state(false);
  let iframeEl: HTMLIFrameElement;
  let currentBlobUrl: string | null = null;


  /**
   * Funzione principale che orchestra la compilazione e l'esecuzione del codice.
   */
  async function run() {
    if (!iframeEl) return;
    

    if (currentBlobUrl) {
      URL.revokeObjectURL(currentBlobUrl);
    }

    try {
      const { js, css } = compile(code, {
        generate: 'client',
        dev: true
      });
      console.log(js, css)

      // 1. Usa la funzione helper per creare l'HTML
      const finalHtml = buildHtmlPage(js.code, css?.code);

      iframeEl.srcdoc = finalHtml;

    } catch (e: any) {
      console.error("Errore di compilazione Svelte:", e);
      const doc = iframeEl.contentDocument;
      if (doc?.body) {
        doc.body.innerHTML = `<pre style="color: red; padding: 1em;"><b>Errore di compilazione:</b>\\n${e.message}</pre>`;
      }
    }
  }
  
  $effect(() => {
   if (iframeReady) {
      run();
    }
  });
</script>

<div class="repl-container">
  <div class="editor-pane">
    <label for="code-editor">Editor Codice Svelte</label>
    <textarea id="code-editor" bind:value={code}></textarea>
  </div>
  <div class="preview-pane">
    <label>Anteprima Live</label>
    <iframe bind:this={iframeEl} 
    onload={() => iframeReady = true}
    sandbox="allow-scripts" title="Anteprima REPL Svelte"></iframe>
  </div>
</div>

<style>
  .repl-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    height: 70vh;
    min-height: 450px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fdfdfd;
    font-family: sans-serif;
  }

  .editor-pane, .preview-pane {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 600;
    color: #555;
    font-size: 0.9em;
    padding-left: 0.25rem;
  }

  textarea {
    flex-grow: 1;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.75rem;
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.6;
    background-color: #fff;
    resize: none;
    color: #222;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
  }

  textarea:focus {
    outline: 2px solid #ff3e00;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 62, 0, 0.2);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #fff;
  }
</style>
