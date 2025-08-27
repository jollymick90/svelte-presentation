<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    id = null,
    lines = null,
    noescape = false,
    typeCode = '',
    children,
  }: {
    id?: string | null;
    lines?: string | boolean | null;
    noescape?: boolean;
    typeCode?: string,
    children: Snippet;
  } = $props();
</script>

<pre data-id={id || null}>
<code
    class={typeCode}
    data-trim
    data-line-numbers={lines || null}
    data-no-escape={noescape || null}>
    {@render children()}
</code>
</pre>
