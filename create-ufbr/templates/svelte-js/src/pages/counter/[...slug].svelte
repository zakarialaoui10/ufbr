<script>
  import Counter from "@components/Counter.svelte";

  export let slug;

  const [start, step = 1] = slug.split("/").map(Number);
</script>

<Counter {start} {step} />