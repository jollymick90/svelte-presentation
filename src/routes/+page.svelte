<script>
  import { goto } from "$app/navigation";
  import "../app.css";

</script>

<div class="w-full h-full flex flex-col justify-center items-center">
  
  <button onclick={() => {goto('/gdgdevfestlecce2025')}}> Start GDG Dev Feste Lecce 2025</button>

  <button onclick={() => {goto('/angularfordummies')}}> Angular For Dummies</button>

  <button onclick={() => {goto('/angular20reactiveperformance')}}> Angular 20 reactive performance</button>
</div>

<style>
  button {
    margin-top: 4rem;
    font-size: 3rem;
  }
  .w-full {
    width: 100%;
  }
  .h-full {
    height: 100%;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
</style>
