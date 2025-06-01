<script lang="ts">
  import FullscreenBtn from "$lib/components/FullscreenBtn.svelte";

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

function goToFirstSlide() {

 location.href = '/slides';
}

function start() {
  //openFullscreen();
  goToFirstSlide();
}

</script>
<div class="w-full h-full flex justify-center items-center">
  <button onclick={start}>Start</button>
</div>
