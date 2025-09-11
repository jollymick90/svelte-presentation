<script lang="ts">
  import aboutme from "$lib/assets/img/aboutme.webp";
  import angular from "$lib/assets/img/angular.webp";
  import java from "$lib/assets/img/java.webp";
  import js from "$lib/assets/img/js.webp";
  import svelte from "$lib/assets/img/svelte.webp";
  import vue from "$lib/assets/img/vue.webp";
  import react from "$lib/assets/img/react.webp";
  import CenterUi from "$lib/components/ui/CenterUI.svelte";
</script>

<CenterUi>
  <div class="flex">
    <div class="">
      <img src={aboutme} alt="micheleimg" />
    </div>
    <div class="flex flex-col p-2 gap-5">
      <p class="text-4xl">Michele Scarpa</p>
      <p class="text-4xl">Software Engineer - Web Developer</p>
      <div class="flex gap-2">
        <img class="w-auto h-10" src={angular} alt="angularicon" />
        <img class="w-auto h-10" src={java} alt="java" />
        <img class="w-auto h-10" src={js} alt="angularicon" />
        <img class="w-auto h-10" src={svelte} alt="angularicon" />
        <img class="w-auto h-10" src={react} alt="angularicon" />
        <img class="w-auto h-10" src={vue} alt="angularicon" />
      </div>
    </div>
  </div>
</CenterUi>
