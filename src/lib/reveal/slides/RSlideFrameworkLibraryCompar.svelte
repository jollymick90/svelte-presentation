<script>
  import { lightBackground } from "../common.svelte";
</script>
<section>
<section>
  <h1>Confronto</h1>
  <aside class="notes">
    Quando parliamo di 'tech stack' per lo sviluppo web, spesso usiamo termini come 'Libreria', 'Framework' o 'Compilatore' in modo un po' confuso.
     Questa tabella ci aiuta a capire le differenze fondamentali che definiscono ciascuno di questi approcci."
  </aside>
</section>

<section data-background-color={lightBackground}>
  <table class="tech-table">
    <thead>
      <tr>
        <th>Characteristic</th>
        <th>Library<br />(Lodash)</th>
        <th>Framework<br />(Angular)</th>
        <th>Library/Framework<br />(React)</th>
        <th>Compiler<br />(Svelte)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Who's in control?</strong></td>
        <td>Developer calls the library</td>
        <td>Framework calls developer's code</td>
        <td>Developer calls the API (hooks)</td>
        <td>Compiler generates developer's code</td>
      </tr>
      <tr>
        <td><strong>When does the work happen?</strong></td>
        <td>At <em>runtime</em> (in the browser)</td>
        <td>At <em>runtime</em> (in the browser)</td>
        <td>At <em>runtime</em> (in the browser)</td>
        <td>At <em>compile-time</em> (during the build)</td>
      </tr>
      <tr>
        <td><strong>Main objective</strong></td>
        <td>Provide specific utilities</td>
        <td>Provide a full app structure</td>
        <td>Provide an API to build UI</td>
        <td>Optimize code & performance</td>
      </tr>
    </tbody>
  </table>

  <aside class="notes">
    Assolutamente. Ecco la nota per lo speaker, pensata per guidarti passo dopo passo nella spiegazione della slide. È strutturata per essere chiara e concisa, mantenendo l'attenzione del pubblico.

### Note dello Speaker per la Slide

---

**Introduzione**

*(Inizia con un'osservazione generale mentre mostri la slide.)*

"Quando parliamo di 'tech stack' per lo sviluppo web, spesso usiamo termini come 'Libreria', 'Framework' o 'Compilatore' in modo un po' confuso. Questa tabella ci aiuta a capire le differenze fondamentali che definiscono ciascuno di questi approcci."

---

**Spiegazione della Tabella - Riga per Riga**

*(Punta alla colonna **Characteristic**.)*

"Per capire le differenze, analizziamo tre caratteristiche chiave."

**1. Chi ha il controllo?**

*(Punta alla riga **"Who's in control?"**)*

"La prima domanda è: 'Chi ha il controllo?'
* **Libreria** *(Punta a Lodash)*: Qui, siamo noi, gli sviluppatori, a chiamare le funzionalità della libreria quando ne abbiamo bisogno. Il controllo è totalmente nelle nostre mani.
* **Framework** *(Punta ad Angular)*: Con un framework, il rapporto si inverte. È il framework che chiama il nostro codice. Questo viene spesso definito 'inversione di controllo' e ci obbliga a rispettare una certa struttura.
* **Libreria/Framework (React)** *(Punta a React)*: React si posiziona in mezzo. Offre un'API, cioè una serie di 'hooks', che noi chiamiamo, ma il ciclo di vita dei componenti è gestito da React stesso. Il controllo è condiviso.
* **Compilatore (Svelte)** *(Punta a Svelte)*: Svelte è diverso. Il controllo è del compilatore. Non scriviamo direttamente codice che viene eseguito nel browser, ma forniamo istruzioni che il compilatore trasforma nel codice finale. È un cambio di paradigma."

**2. Quando avviene il lavoro?**

*(Punta alla riga **"When does the work happen?"**)*

"Ora, guardiamo al 'quando'.
* Librerie, Framework e anche React operano principalmente a **`runtime`**. Il lavoro viene eseguito direttamente nel browser, nel momento in cui l'utente carica la pagina.
* Svelte, invece, fa il lavoro a **`compile-time`**, cioè al momento della *build*. Il risultato finale è codice JavaScript puro e ottimizzato, che non include Svelte stesso. Questo è il motivo per cui Svelte genera bundle più piccoli e veloci."

**3. Obiettivo principale**

*(Punta alla riga **"Main objective"**)*

"Infine, capiamo l'obiettivo di ciascuno:
* Una **Libreria** ha uno scopo specifico: fornire utility.
* Un **Framework** mira a dare una struttura completa per l'intera applicazione.
* **React** si concentra sulla creazione di interfacce utente, offrendo un'API dichiarativa e basata su componenti.
* L'obiettivo principale del **Compilatore Svelte** è l'ottimizzazione pura: creare il codice più piccolo e performante possibile."

---

**Conclusione**

*(Fai una sintesi finale guardando l'intero pubblico.)*

"Quindi, la prossima volta che scegliamo una tecnologia, è utile pensare non solo alle funzionalità, ma anche al rapporto di controllo, a quando avviene il lavoro e all'obiettivo principale. Questo ci aiuta a scegliere lo strumento più adatto per il nostro progetto."

*(Puoi concludere chiedendo se ci sono domande, per incoraggiare l'interazione.)*

"Ci sono domande su come questi strumenti si differenziano tra loro?"

  </aside>
</section>
</section>


<style>
  .tech-table {
    font-size: 1.5rem;
    color: #0b2a4a;
    width: 100%; /* La tabella occupa lo spazio disponibile */
    max-width: 800px; /* Limite massimo per non renderla troppo grande */
    border-collapse: collapse; /* Rimuove lo spazio tra i bordi */
    font-family: Arial, sans-serif;
    table-layout: fixed; /* Distribuisce le colonne in modo uniforme */
  }

  .tech-table th,
  .tech-table td {
    border: 1px solid #0b2a4a;
    padding: 8px; /* Padding ridotto per un look più compatto */
    text-align: center;
    word-wrap: break-word; /* Evita che il testo vada fuori dalla cella */
  }

  .tech-table thead {
    background-color: #f2f2f2; /* Sfondo per l'intestazione */
  }

  .tech-table th {
    font-weight: bold;
  }

  .tech-table td strong {
    font-weight: bold;
  }
</style>
