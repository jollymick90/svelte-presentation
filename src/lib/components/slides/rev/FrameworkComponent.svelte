<!-- <script>
  import RevCode from "$lib/components/reveal/RevCode.svelte";
  import RevSlide from "$lib/components/reveal/RevSlide.svelte";
</script>
<RevSlide>
<RevCode noescape typeCode="language-jsx">
{
`const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};`}
</RevCode>
</RevSlide>
<RevSlide>
<RevCode noescape typeCode="svelte">
{
`
<script>
  let count = 0;
  const increment = () => {
    count++;
  };
</script>

<div>
  <p>Count: {count}</p>
  <button on:click={increment}>Increment</button>
</div>
`}
</RevCode>
</RevSlide> -->
