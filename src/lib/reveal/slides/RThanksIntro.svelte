<script lang="ts">
    import gdgleccelogo from '$lib/assets/img/logo-mobile-BUSyRFQa.png'
  import { backgroundGdgLecce, defaultBackground } from '../common.svelte';
</script>
<section data-auto-animate data-background-color="{defaultBackground}">
    <img src="{gdgleccelogo}" alt="gdgleccelogo"/>
    <h2 class="fragment" style="color: {backgroundGdgLecce}">Thank you, organizers! </h2>
    <h2 class="fragment" style="color: {backgroundGdgLecce}">Great event, guys! </h2>
</section>
<style>
    section {
        /* background-image: linear-gradient(rgb(77, 143, 233) 3px, transparent 3px), linear-gradient(90deg, rgb(77, 143, 233) 3px, transparent 3px); background-size: 40px 40px; */
    }
    
</style>