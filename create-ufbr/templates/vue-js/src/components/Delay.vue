<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  fallback: {
    default: null,
  },
});

const ready = ref(props.delay === 0);
let timer;

onMounted(() => {
  if (props.delay > 0) {
    timer = setTimeout(() => {
      ready.value = true;
    }, props.delay);
  }
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <slot v-if="ready" />
  <component v-else :is="fallback" />
</template>