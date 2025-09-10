<script>
  import { bgSvelteRadial, defaultSvelteBackground } from "../common.svelte";
  import Fa from "svelte-fa";

  import { faGraduationCap} from "@fortawesome/free-solid-svg-icons";

</script>
<section 
  data-background-gradient={bgSvelteRadial}
  data-auto-animate
>
  <span><Fa size="3x" icon={faGraduationCap}/></span>
  
</section>

<section 
  data-background-gradient={bgSvelteRadial}
  data-auto-animate
>
  <span><Fa size="3x" icon={faGraduationCap}/></span>
  <h2>Library</h2>  
</section>

<section 
  data-background-gradient={bgSvelteRadial}
  data-auto-animate
>
  <span><Fa size="3x" icon={faGraduationCap}/></span>
  <h3>Library</h3>
  <p >
    A library is a <u>collection</u> of code, data, or tools created to be <u>reused</u> by
    different programs, instead of <u>rewriting</u> the same functionality from
    scratch.
  </p>
</section>

<section 
  data-background-gradient={bgSvelteRadial}
  data-auto-animate
>
  <span><Fa size="3x" icon={faGraduationCap}/></span>

  <h3>Library</h3>
  <p class="definition">
     <u>collection</u>  <u>reusable</u> <u>rewriting</u> 
  </p>

  <h3>Framework</h3>
  <p >
    <i>A reusable <u>structure</u> for software development. A framework is a predesigned
    structure that provides a foundation for building applications. It defines
    how different components should interact, offering reusable patterns and
    conventions.</i>
  </p>
</section>

<section 
  data-background-gradient={bgSvelteRadial}
  data-auto-animate
>
  <span><Fa size="3x" icon={faGraduationCap}/></span>

  <h5>Library</h5>
  <p class="definition">
    <i>A library is a collection of code, data, or tools created to be reused by
    different programs, instead of rewriting the same functionality from
    scratch.</i>
  </p>
  <h5>Framework</h5>
  <p class="definition">
    <i>A reusable structure for software development. A framework is a predesigned
    structure that provides a foundation for building applications. It defines
    how different components should interact, offering reusable patterns and
    conventions.</i>
  </p>
</section>

<section 
  data-background-gradient={bgSvelteRadial}
  data-auto-animate
>
  <span><Fa size="3x" icon={faGraduationCap}/></span>
  <h3>Library vs Framework</h3>
    <p >
    <u>Library</u> <b>→</b> <b>Developer CALL library</b>
      <br>
    <span class="small">
      A library provides optional, plug-and-play functionality. The
      developer stays in control and decides when and how to call the library's
      functions. 
    </span>

    </p>
    <p>
    <u>Framework</u> <b>→</b> <b>Don't call us, we'll call you</b>
    <br>
    <span class="small">
    A framework defines the overall structure and flow of
    an application. It is in control, and decides when and how to call the
    developer's code (and, if needed, specific libraries). (“Hollywood
    Principle” (“Don't call us, we'll call you”).</span>
    </p>
</section>


<style>
  
 .definition {
  font-size: 1.5rem;
 }
 .small {
  font-size: 1.5rem;
 }
</style>