<script lang="ts">
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
</script>
<button onclick={openFullscreen}>Go To Fullscreen</button>