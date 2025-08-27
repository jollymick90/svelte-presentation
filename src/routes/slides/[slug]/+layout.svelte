<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { slidePages, slideStore, summary } from "$lib/slides.svelte";
  import { onMount } from "svelte";

  if (browser) console.log("[slides] i'm running on browser");
  else {
    const slideParam = page.params.slug;
    console.log(slideParam);
    console.log("[layout slides] i'm running on server");
  }

  let { children } = $props();
  
  const clampIndex = (i: number) =>
    Math.max(0, Math.min(i, slidePages.length - 1));

  const buildSlideState = (index: number) => {
    const nextIndex = clampIndex(index);
    const nextSlideKey = slidePages[nextIndex];
    const nextComponent = summary[nextSlideKey];
    return {
      currentComponent: nextComponent,
      currentIndex: nextIndex,
      currentSlideKey: nextSlideKey,
    } as const;
  };
  const setSlideByIndex = (index: number, navigate = true) => {
    const state = buildSlideState(index);
    slideStore.state = { ...state };
    if (navigate) goto(state.currentSlideKey);
  };

  const navigateBy = (delta: number) => {
    const current = slideStore.state?.currentIndex ?? 0;
    setSlideByIndex(current + delta, true);
  };
  const next = () => navigateBy(1);
  const prev = () => navigateBy(-1);

  $effect(() => {
    const handleKey = (e: any) => {
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
    console.log(page);
    const slideParam = page.params.slug;

    const slidePageIndex = slidePages.findIndex((p) => slideParam === p);
    if (slidePageIndex > -1) {
      const nextIndex = slidePageIndex;
      const nextSlideKey = slidePages[nextIndex];
      const nextComponent = summary[nextSlideKey];
      slideStore.state = {
        currentComponent: nextComponent,
        currentIndex: nextIndex,
        currentSlideKey: nextSlideKey,
      };
    }
  });
</script>

{@render children()}
