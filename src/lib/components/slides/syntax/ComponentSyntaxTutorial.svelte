<script>
  import ReplEmbed from "$lib/components/tools/ReplEmbed.svelte";

  

  const steps = [
    { gist: 'intro-00', label: 'Start' },
    { gist: 'intro-01', label: 'Props' },
    { gist: 'intro-02', label: 'Reattività' },
  ];
  let idx = $state(0);

  function next(){ if (idx < steps.length - 1) idx++; }
  function prev(){ if (idx > 0) idx--; }
</script>

<div class="flex gap-2 items-center mb-2">
  <button onclick={prev} disabled={idx===0}>◀ Prev</button>
  <span>{steps[idx].label}</span>
  <button onclick={next} disabled={idx===steps.length-1}>Next ▶</button>
</div>

<ReplEmbed gistId={steps[idx].gist} theme="dark" height={560} />