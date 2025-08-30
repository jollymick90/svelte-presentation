<script>
  import RevSlide from "$lib/components/reveal/RevSlide.svelte";
  import RTitleUi from "../ui/RTitleUI.svelte";
  import {defaultBackground} from '../common.svelte';
</script>

<RevSlide
background={defaultBackground}
>
  <RTitleUi
    titles={["Getting Started with Svelte", "A Game-Changer for Web Developer"]}
  ></RTitleUi>
  <aside class="notes">
    Buongiorno a tutti e benvenuti! Mi fa davvero piacere essere qui con voi oggi
  </aside>
</RevSlide>
