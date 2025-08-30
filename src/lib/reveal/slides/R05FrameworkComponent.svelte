<script lang="ts">
  import { defaultBackground } from "../common.svelte";
    import Fa from "svelte-fa";

  import { faDog, faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

</script>
<section data-background-color={defaultBackground} data-auto-animate>      
    <span><Fa size="3x" icon={faBriefcase}/></span>
    
    <aside class="notes">
    Solo che a lavoro, si ritrova questo!
  </aside>
  
</section>


<section data-background-color={defaultBackground}>
  <pre><code data-trim data-noescape
    data-line-numbers="1 | 2-6 | 8-11"
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
  </aside>
</section>
<section data-background-color={defaultBackground}>
  <h2>Cambia...</h2>
  <aside class="notes">
    Poi cambia
  </aside>
</section>






<section data-background-color={defaultBackground}>
  <pre><code data-trim data-noescape
    data-line-numbers="3 | 15-23 | 6-12">
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
    ma si spaventa perché scopre i tipi
  </aside>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
  <h1 class="big-framework-title">Framework</h1>
  <aside class="notes">
    scopre i framework
    e gli arriva un coppino da dietro dal collega che dice
  </aside>
</section>

<section data-background-color={defaultBackground} data-auto-animate>
  <h3 class="big-framework-title">React non è un Framework</h3>
  <aside class="notes">
    e gli arriva un coppino da dietro dal collega che dice
  </aside>
</section>

<style>
  .big-framework-title {
    font-size: 9rem;
  }
  :root {
    /* --r-main-font-size: 15px; */
  }
  /* code {
   font-size: large;
  } */
</style>
