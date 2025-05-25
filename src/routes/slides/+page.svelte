<script lang="ts">
 import { goto } from '$app/navigation';
 import {
    slides
} from '$lib/slides';
  import { mount, onMount } from 'svelte';
let index = $state(0);



const next = () => {
    index = Math.min(index + 1, slides.length - 1);
    
    goto(`slides/${index}`);
};
const prev = () => {
    index = Math.max(index - 1, 0)
    goto(`slides/${index}`);

};

$effect(() => {
    const handleKey = (e: any) => {
        if (e.key === 'ArrowRight' || e.key === ' ') next();
        if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('click', next);
    return () => {
        window.removeEventListener('keydown', handleKey);
        window.removeEventListener('click', next);
    };
});

onMount(() => {
    
})
</script>
<h1>I'm Base slide2 
    
</h1>
