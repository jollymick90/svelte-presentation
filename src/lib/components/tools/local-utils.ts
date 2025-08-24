export const initialCode = `<script>
  let name = $state('mondo');
<\/script>

<style>
  h1 {
    color: #ff3e00; /* Arancione Svelte */
    font-family: 'Helvetica Neue', sans-serif;
  }
  input {
    font-size: 1em;
    padding: 0.5em;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
</style>

<h1>Ciao {name}!</h1>
<p>Prova a modificare il codice qui sopra.</p>

<input bind:value={name} placeholder="Scrivi un nome..." />
`;


  /**
   * Genera l'HTML di base per l'iframe, includendo l'importmap per Svelte
   * e iniettando il CSS compilato.
   * @param cssCode - Il codice CSS opzionale generato dal compilatore Svelte.
   * @returns La stringa HTML completa per il documento dell'iframe.
   */
  export function createIframeHtml(cssCode: string | null | undefined): string {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Svelte 5 REPL</title>
          <script type="importmap">
          {
            "imports": {
              "svelte/": "https://cdn.jsdelivr.net/npm/svelte@5.0.0-beta.28/"
            }
          }
          </script>
          <style>
            /* CSS compilato dal componente Svelte */
            ${cssCode || ''}
          </style>
          <style>
            /* Stili di base per il contenuto dell'iframe */
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              margin: 1rem;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>`;
  }

  /**
   * Genera il contenuto dello script module che importa e monta il componente Svelte.
   * @param componentUrl - L'URL del blob che punta al codice JS del componente compilato.
   * @returns La stringa di codice JavaScript per lo script di bootstrap.
   */
  export function createBootstrapScriptContent(componentUrl: string): string {
    return `
      try {
        // Importa dinamicamente il componente dall'URL del blob
        const Component = (await import('${componentUrl}')).default;
        
        // "Monta" il componente nel div #app
        new Component({
          target: document.getElementById('app')
        });
      } catch (e) {
        // Mostra gli errori direttamente nell'iframe per un debug più semplice
        const pre = document.createElement('pre');
        pre.style.color = 'red';
        pre.textContent = e.stack;
        document.body.innerHTML = '';
        document.body.appendChild(pre);
        console.error('Errore di runtime nell\\'iframe:', e);
      }
    `;
  }

  export function buildHtmlPage(js: string, css: string | null | undefined) {
    const finalHtml = `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Svelte 5 REPL</title>
            <!-- L'importmap permette di usare "svelte/" per caricare Svelte dalla CDN -->
            <script type="importmap">
            {
              "imports": {
                "svelte/": "https://cdn.jsdelivr.net/npm/svelte@5.0.0-beta.28/"
              }
            }
            </script>
            <!-- Inietta il CSS compilato -->
            <style>${css || ''}</style>
            <!-- Stili di base per l'iframe -->
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                margin: 1rem;
                color: #333;
              }
            </style>
          </head>
          <body>
            <div id="app"></div>
            <script type="module">
              // Il codice JS compilato da Svelte è un modulo ES, quindi lo mettiamo in un data URL
              // per poterlo importare. btoa() codifica la stringa in base64.
               const compiledJsCode = ${JSON.stringify(js)};
              
             const blob = new Blob([compiledJsCode], { type: 'application/javascript' });
              const url = URL.createObjectURL(blob);
              try {
                // Importiamo il componente dal nostro modulo "virtuale"
                const { default: Component } = await import(url);
                
                // E lo montiamo nel DOM
                new Component({
                  target: document.getElementById('app')
                });
              } catch(e) {
                // Gestione errori di runtime
                document.body.innerHTML = \`<pre style="color:red;">\${e.stack}</pre>\`;
                console.error(e);
              }
            </script>
          </body>
        </html>`;
        return finalHtml;
  }