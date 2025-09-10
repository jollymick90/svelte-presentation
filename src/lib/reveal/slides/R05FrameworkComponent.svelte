<script lang="ts">
  import { defaultBackground } from "../common.svelte";
    import Fa from "svelte-fa";

  import { faDog, faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

</script>
<section data-background-color={defaultBackground} data-auto-animate>      
    <span><Fa size="3x" icon={faBriefcase}/></span>
    
    <aside class="notes">
   e cosa scopre a lavoro?
  </aside>
  
</section>


<section data-auto-animate data-background-color={defaultBackground}>
  <h5>React</h5>
  <pre><code data-trim data-noescape
    data-line-numbers="1-14 | 2-6 | 8-13"
    >
    {`
  const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
    `}
  </code>
  </pre>
  <aside class="notes">
    Scopre React, 
    e vede javascript e html, mescolato.... 
    Per sbaglio lo chiama 'Framework'
  
  </aside>
</section>
<section data-auto-animate data-background-color={defaultBackground}>
  <h5>React</h5>
  <p>Libreria!</p>
  <pre><code data-trim data-noescape
    data-line-numbers="1-14 | 2-6 | 8-13"
    >
    {`
  const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
    `}
  </code>
  </pre>
  <aside class="notes">
   
   e arriva il puntuale "react non è un framework è una libreria"
  </aside>
</section>
<section data-auto-animate data-background-color={defaultBackground}>
  <h2>Cambia lavoro o progetto...</h2>
  <aside class="notes">
   dopo questa batosta e aver ingrovigliato il codice a sufficenza
  </aside>
</section>

<section data-auto-animate data-background-color={defaultBackground}>
  <h5>Angular</h5>
  <pre><code data-trim data-noescape
    data-line-numbers="1-14 | 3-4 | 25-34 | 32 | 6-21">
    {`  
@Component({
  selector: 'my-app',
  template: ./app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public counter: number = 0;
  public increment() {
    this.counter++;
    return this.counter;
  }

  public decrement() {
    this.counter--;
    return this.counter;
  }

  public reset() {
    this.counter = 0;
    return this.counter;
  }
}

--app.component.html
<div>
	<button (click)="increment()" 
    class="button-up">increment</button>
  <button (click)="decrement()" 
    class="button-down">decrement</button>
  <button (click)="reset()"
    class="button-0">reset</button>
  {{counter}}
</div>
    `}
  </code>
  </pre>
    <aside class="notes"
     
    >
    scopre Angular, 
    si tranquillizza perché vede un file html 
    ma si spaventa perché scopre typescript
  </aside>
</section>

