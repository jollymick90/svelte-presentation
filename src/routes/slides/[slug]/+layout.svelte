<script lang="ts">
 import { goto } from '$app/navigation';
 import { page } from '$app/state';
 import { slides } from '$lib/slides';
import { onMount } from 'svelte';
let index = $state(0);

let { children } = $props();

const next = () => {
    index = Math.min(index + 1, slides.length - 1);
    
    goto(`${index}`);
};
const prev = () => {
    index = Math.max(index - 1, 0)
    goto(`${index}`);

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
    const currentPage = +page.params.slug;
    const slidePage = slides.find(p => currentPage === p);
    if (slidePage !== undefined) {
        index = currentPage;
    }
})
</script>

<div>
    {@render children()}
</div>
