<script lang="ts">
  import type { Snippet } from "svelte";

    const { 
      id = null,
       animate = false,
        restart = false,
        background = null,
         children  }: 
    { id?: string | null,
     animate?: boolean, 
     restart?: boolean,
     background?: string | null, 
      children: Snippet } = $props();
</script>

<section
 data-auto-animate-id={id}
 data-auto-animate={animate || null}
 data-auto-animate-restart={restart || null}
 data-background-color={background || null}
>
 {@render children()}
</section>