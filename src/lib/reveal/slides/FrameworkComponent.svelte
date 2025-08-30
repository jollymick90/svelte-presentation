<script lang="ts">
  import { defaultBackground } from "../common.svelte";
</script>

<section data-background-color={defaultBackground}>
  <pre><code data-trim data-noescape>
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
</section>
<section data-background-color={defaultBackground}>
  <pre><code data-trim data-noescape>
    {`
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

  <pre><code data-trim data-noescape>
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
    `}
  </code>
  </pre>
</section>
<section data-background-color={defaultBackground} data-auto-animate>
  <h1 class="big-framework-title">Framework</h1>
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
