<script>
  import { bgSvelteLinear } from "../common.svelte";

  import { firstCodeComponent } from "../store/static-text";
</script>

<section data-auto-animation data-background-color={bgSvelteLinear}>
  <h4>First Svelte component</h4>
</section>
<section data-auto-animation data-background-color={bgSvelteLinear}>
  <h4>First Svelte component</h4>
  <pre>
        <code
      data-trim
      data-noescape
      data-line-numbers=""> {firstCodeComponent}  
    </code>
    </pre>
</section>
