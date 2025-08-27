<script lang="ts">
  
  import { browser } from "$app/environment";
  import BoxUi from "$lib/components/ui/BoxUI.svelte";
  import CardUi from "$lib/components/ui/CardUI.svelte";
  if (browser) console.log("i'm running on browser");
  else console.log("i'm running on server");

  function goToFirstSlide() {
    location.href = "/lecce/slides/title";
  }

  function start() {
      
    const elem = document.documentElement;

    /* View in fullscreen */
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        /* Safari */
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        /* IE11 */
        (elem as any).msRequestFullscreen();
      }
    }
    //openFullscreen();
    goToFirstSlide();
  }
</script>

<div class="w-full h-full flex justify-center items-center">
  <CardUi>
  <button onclick={start}>Start</button>
  </CardUi>
</div>
