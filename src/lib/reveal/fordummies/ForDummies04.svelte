<script lang="ts">
  import Fa from "svelte-fa";

  import databinding from "$lib/assets/img/databinding.png";
  import routing from "$lib/assets/img/routing-part-0.png";
  import navigate1 from "$lib/assets/img/navigate-part-1.png";
  import navigate2 from "$lib/assets/img/navigate-part-2.png";

  export const bg = "oklch(47.66% .246 305.88)";
</script>

<section data-auto-animate data-background-color={bg}>
  <h2>Real-time Connection - Databinding </h2>
  <p>
    <img class="fragment image" src={databinding} alt="databinding" />
  </p>
  <aside class="notes">
    Components are not static. Angular uses 'data binding', which is like a
    real-time connection between the app's data and the screen. Imagine a
    spreadsheet that updates itself.
  </aside>
</section>

<section data-auto-animate data-background-color={bg}>
  <h2>Built-in GPS - Routing</h2>
  <p>
    <img class="fragment image" src={routing} alt="routing" />
  </p>
  <aside class="notes">Additionally, 'routing' is like a GPS. 
    Like a navigator app, it shows us where we are and where we can go </aside>
</section>

<section data-auto-animate data-background-color={bg}>
  <h2>Built-in GPS - Routing</h2>
  <p>
    <img class="image" src={navigate1} alt="navigate1" />
  </p>
  <aside class="notes">
     'routing'  allows you to move from one
    'page' to
  </aside>
</section>
<section data-auto-animate data-background-color={bg}>
  <h2>Built-in GPS - Routing</h2>
  <p>
    <img class="image" src={navigate2} alt="navigate1" />
  </p>
  <aside class="notes">
    another in the app without reloading the entire page. This is why modern
    apps are so fast and fluid.
  </aside>
</section>

<style>
  .flexcol {
    display: flex;
    flex-direction: column;
  }
  .grid-template {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .image {
    height: 400px;
    object-fit: scale-down;
  }
  .textpoint {
    margin: 0 0.5rem 0 0.5rem;
    text-align: start;
  }
  .textpoint span {
    font-size: 1.9rem;
  }
</style>
