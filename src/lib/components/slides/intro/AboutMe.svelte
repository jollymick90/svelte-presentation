<script lang="ts">
  import aboutme from "$lib/assets/img/aboutme.png";
  import angular from "$lib/assets/img/angular.png";
  import java from "$lib/assets/img/java.png";
  import js from "$lib/assets/img/js.png";
  import svelte from "$lib/assets/img/svelte.png";
  import vue from "$lib/assets/img/vue.png";
  import react from "$lib/assets/img/react.png";
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
