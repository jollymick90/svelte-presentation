<section>
  <h3 class="slide-title">Libreria vs Framework vs Compilatore (Svelte)</h3>

  <div class="table-wrap">
    <table class="cmp-table" role="table">
      <thead>
        <tr>
          <th class="corner" aria-hidden="true"></th>
          <th scope="col">Libreria<br/><span class="muted">(es. Lodash)</span></th>
          <th scope="col">Framework<br/><span class="muted">(es. Angular)</span></th>
          <th scope="col">Libreria/Framework<br/><span class="muted">(es. React)</span></th>
          <th scope="col">Compilatore<br/><span class="muted">(Svelte)</span></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Chi ha il controllo?</th>
          <td>Il developer chiama la libreria</td>
          <td>Il framework chiama il codice del developer</td>
          <td>Il developer chiama l'API (hooks)</td>
          <td>Il compilatore genera codice per il developer</td>
        </tr>

        <tr>
          <th scope="row">Quando avviene il lavoro?</th>
          <td>A <em>runtime</em> (nel browser)</td>
          <td>A <em>runtime</em> (nel browser)</td>
          <td>A <em>runtime</em> (nel browser)</td>
          <td>A <em>compile-time</em> (durante la build)</td>
        </tr>

        <tr>
          <th scope="row">Obiettivo principale</th>
          <td>Fornire utility specifiche</td>
          <td>Fornire una struttura completa per l'app</td>
          <td>Fornire un'API per costruire UI</td>
          <td>Ottimizzare il codice e le performance</td>
        </tr>
      </tbody>
    </table>
  </div>


</section>

  <style>
    /* --- layout --- */
    .slide-title {
      margin: 0 0 0.75rem 0;
      font-weight: 700;
      letter-spacing: 0.2px;
    }
    .table-wrap {
      margin: 0 auto;
      max-width: 1100px;
    }

    /* --- table base --- */
    .cmp-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      overflow: hidden;
      border-radius: 12px;
      background: var(--tbl-bg, #fff);
      box-shadow: 0 6px 24px rgba(0,0,0,.08);
      font-size: 0.9em;
    }

    /* header */
    .cmp-table thead th {
      text-align: left;
      padding: 14px 16px;
      background: var(--tbl-head, #f5f7fb);
      border-bottom: 1px solid #e5e8ef;
      vertical-align: bottom;
      font-weight: 700;
      line-height: 1.2;
    }
    .cmp-table thead th:not(.corner) {
      min-width: 160px;
    }
    .cmp-table .corner { width: 220px; background: transparent; }

    .muted {
      display: block;
      font-weight: 500;
      opacity: .65;
      font-size: .85em;
    }

    /* body */
    .cmp-table tbody th[scope="row"] {
      background: var(--tbl-side, #fafbfe);
      font-weight: 700;
      padding: 14px 16px;
      border-right: 1px solid #e5e8ef;
      width: 220px;
    }
    .cmp-table td {
      padding: 14px 16px;
    }

    /* grid lines */
    .cmp-table tbody tr + tr th,
    .cmp-table tbody tr + tr td {
      border-top: 1px solid #e9edf3;
    }
    .cmp-table td + td,
    .cmp-table th + td {
      border-left: 1px solid #edf0f6;
    }

    

    /* :global(.reveal.has-dark-background) .cmp-table {
      --tbl-bg: rgba(255,255,255,.06);
      --tbl-head: rgba(255,255,255,.12);
      --tbl-side: rgba(255,255,255,.08);
      color: #fff;
      box-shadow: 0 6px 24px rgba(0,0,0,.25);
    }
    :global(.reveal.has-dark-background) .cmp-table td,
    :global(.reveal.has-dark-background) .cmp-table th {
      border-color: rgba(255,255,255,.14);
    } */
  </style>
