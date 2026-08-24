<script>
  import Delay from "@components/Delay.svelte";

  export let delay = 1000;
</script>

<Delay {delay}>
  <svelte:fragment slot="fallback">
    <p>Loading...</p>
  </svelte:fragment>

  <p>This appears after {delay} ms.</p>
</Delay>