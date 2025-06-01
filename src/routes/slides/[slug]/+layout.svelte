<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { slidePages, slideStore } from "$lib/slides.svelte";
  import { onMount } from "svelte";

  let { children } = $props();

  const next = () => {
    slideStore.currentIndex = Math.min(slideStore.currentIndex + 1, slidePages.length - 1);
    slideStore.currentSlideKey = slidePages[slideStore.currentIndex];
    goto(slideStore.currentSlideKey);
  };
  const prev = () => {
    
    slideStore.currentIndex = Math.max(slideStore.currentIndex - 1, 0);
    slideStore.currentSlideKey = slidePages[slideStore.currentIndex];
    
    goto(slideStore.currentSlideKey);
  };

  $effect(() => {
    const handleKey = (e: any) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("click", next);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("click", next);
    };
  });

  onMount(() => {
    const slideParam = page.params.slug;

    const slidePageIndex = slidePages.findIndex((p) => slideParam === p);
   
    if (slidePageIndex > -1) {
        slideStore.currentIndex = slidePageIndex;
        slideStore.currentSlideKey = slidePages[slideStore.currentIndex];
    }
  });
</script>

{@render children()}
