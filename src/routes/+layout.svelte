<script lang="ts">
	import bacaroLogo from "$lib/assets/img/BacaroLogo.png";
  import '../app.css';
  	
	let { children } = $props();
	
</script>

<div class="bg-gradient-to-tr from-slate-300 to-slate-100 h-screen w-screen flex items-center justify-center">
    <div class="relative bg-slate-200 w-[95%] h-[95%] rounded-3xl shadow-xl border border-slate-400 overflow-hidden">
      
      <!-- Top bar -->
      <div class="absolute w-full h-10 z-[2] flex items-center justify-between bg-[#375b8d]  rounded-t-3xl px-4">
        <!-- Svelte logo top-left -->
        <div class="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte" class="h-5 w-5" />
        </div>
        <!-- Window buttons -->
        <div class="flex space-x-2">
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
          <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span class="w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </div>

      <!-- Main content area -->
      <div class="absolute w-full h-full pt-12 p-4 bg-slate-100 border border-slate-300 rounded-b-3xl overflow-auto">
        <!-- You can insert any content here -->
        
		    {@render children()}
      </div>

      <!-- Bottom left logo -->
      <div class="absolute bottom-2 left-2">
        <img src="{bacaroLogo}" alt="Bacaro Tech" class="h-10" />
        <!-- Usa un tuo logo se preferisci -->
      </div>

      <!-- Bottom right logo -->
      <div class="absolute bottom-2 right-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte Logo" class="h-10" />
      </div>
    </div>
  </div>