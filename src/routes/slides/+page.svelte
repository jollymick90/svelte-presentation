<script lang="ts">
  import { goto } from "$app/navigation";
  import { slidePages } from "$lib/slides.svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  if (browser) console.log("[slides] i'm running on browser");
  else console.log("[slides] i'm running on server");
  let index = $state(0);

  const next = () => {
    index = Math.min(index + 1, slidePages.length - 1);

    goto(`slides/${index}`);
  };
  const prev = () => {
    index = Math.max(index - 1, 0);
    goto(`slides/${index}`);
  };

  $effect(() => {
    const handleKey = (e: any) => {
      console.log("--- handle key", e.key)
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    // window.addEventListener("click", next);
    return () => {
      window.removeEventListener("keydown", handleKey);
      // window.removeEventListener("click", next);
    };
  });
  
  onMount(() => {
    console.log("--- next")
    next();
  }) 

</script>
