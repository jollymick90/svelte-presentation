<script lang="ts">
    const { children } = $props();
</script>

<div class="p-6 flex flex-col justify-center items-center h-full space-y-8">
    {@render children()}
</div>