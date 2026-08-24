<script>
  export let delay = 0;
  export let fallback = null;

  let ready = delay === 0;

  const timer = delay > 0
    ? setTimeout(() => {
        ready = true;
      }, delay)
    : null;

  import { onDestroy } from "svelte";

  onDestroy(() => {
    if (timer) clearTimeout(timer);
  });
</script>

{#if ready}
  <slot />
{:else}
  {@html fallback}
{/if}