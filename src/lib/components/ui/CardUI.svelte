<script lang="ts">
    const { children } = $props();
</script>

<div
    class="bg-white border border-slate-300 rounded-xl shadow-lg px-10 py-6 text-center text-xl font-semibold text-black hover:scale-105 transition"
  >
  {@render children()}
</div>