<script>
  import { bgSvelteRadial, lightBackground } from "../common.svelte";

</script>
<section
 data-background-gradient={lightBackground}
>
  <h3>Libreria vs Framework vs Compilatore</h3>

  <table border="1" cellpadding="6" cellspacing="0">
    <thead>
      <tr>
        <th>Caratteristica</th>
        <th>Libreria<br/>(es. Lodash)</th>
        <th>Framework<br/>(es. Angular)</th>
        <th>Libreria/Framework<br/>(es. React)</th>
        <th>Compilatore<br/>(Svelte)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Chi ha il controllo?</strong></td>
        <td>Il developer chiama la libreria</td>
        <td>Il framework chiama il codice del developer</td>
        <td>Il developer chiama l'API (hooks)</td>
        <td>Il compilatore genera codice per il developer</td>
      </tr>
      <tr>
        <td><strong>Quando avviene il lavoro?</strong></td>
        <td>A <em>runtime</em> (nel browser)</td>
        <td>A <em>runtime</em> (nel browser)</td>
        <td>A <em>runtime</em> (nel browser)</td>
        <td>A <em>compile-time</em> (durante la build)</td>
      </tr>
      <tr>
        <td><strong>Obiettivo principale</strong></td>
        <td>Fornire utility specifiche</td>
        <td>Fornire una struttura completa per l'app</td>
        <td>Fornire un'API per costruire UI</td>
        <td>Ottimizzare il codice e le performance</td>
      </tr>
    </tbody>
  </table>
</section>


  <style>
  table {
    font-size: 1rem;
  }
  </style>
