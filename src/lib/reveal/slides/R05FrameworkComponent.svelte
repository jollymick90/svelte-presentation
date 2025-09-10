<script lang="ts">
  import { defaultBackground } from "../common.svelte";
  import angular from "$lib/assets/img/angular.png";
  import react from "$lib/assets/img/react.png";
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
  <h5>React <img class="w-auto h-10" src={react} alt="reacticon" /></h5>

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
    Ecco la complessità che Molly incontra. Un semplice contatore in React richiede useState e un'intera API da gestire.
    
  
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>      
    <h5>React <img class="w-auto h-10" src={react} alt="reacticon" /></h5>
    <p>JSX</p>
    <p>Virtual DOM</p>
    <p>Web Component</p>
    <aside class="notes">
   Per sbaglio lo chiama 'Framework'
  </aside>
  
</section>
<section data-background-color={defaultBackground} data-auto-animate>      
    <h5> <img class="w-auto h-10" src={react} alt="reacticon" /></h5>
    <h3>React is a LIBRARY</h3>
 
    <aside class="notes">
   e arriva il puntuale "react non è un framework è una libreria"
  </aside>
  
</section>

<section data-auto-animate data-background-color={defaultBackground}>
  <h2>Change...</h2>
  <aside class="notes">
   dopo questa batosta e aver ingrovigliato il codice a sufficenza
  </aside>
</section>

<section data-auto-animate data-background-color={defaultBackground}>
  <h5>Angular  <img class="w-auto h-10" src={angular} alt="angularicon" /></h5>
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
    ma si spaventa perché scopre typescript.
    In Angular, abbiamo una struttura rigida e classi da configurare. Spesso, ci si chiede se valga la pena di tutta questa fatica per un compito così semplice
  </aside>
</section>
<style>
   .h-10 {
    height: calc(var(--spacing) * 10) /* 2.5rem = 40px */;
  }
  .w-auto {
    width: auto;
  }
</style>

