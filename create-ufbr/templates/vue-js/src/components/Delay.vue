<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  delay: {
    type: [Number, String],
    default: 0,
  },
});

const ready = ref(Number(props.delay) <= 0);

let timer;

onMounted(() => {
  const delay = Number(props.delay);

  if (delay > 0) {
    timer = setTimeout(() => {
      ready.value = true;
    }, delay);
  }
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<template>
  <template v-if="ready">
    <slot />
  </template>

  <template v-else>
    <slot name="fallback">
      <p>Loading...</p>
    </slot>
  </template>
</template>