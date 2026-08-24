<script>
  import { onMount, onDestroy } from "svelte";

  export let delay = 0;

  let ready = delay === 0;
  let timer;

  onMount(() => {
    if (delay > 0) {
      timer = setTimeout(() => {
        ready = true;
      }, delay);
    }
  });

  onDestroy(() => {
    if (timer) clearTimeout(timer);
  });
</script>

{#if ready}
  <slot />
{:else}
  <slot name="fallback" />
{/if}