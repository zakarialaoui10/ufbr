<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  start: {
    type: Number,
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
  },
});

const count = ref(props.start);
const step = computed(() => props.step);
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "fit-content",
  },
  value: {
    minWidth: "50px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
  },
  button: {
    width: "36px",
    height: "36px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "20px",
  },
};
</script>

<template>
  <div :style="styles.container">
    <button
      :style="styles.button"
      @click="count -= step"
    >
      −
    </button>

    <span :style="styles.value">{{ count }}</span>

    <button
      :style="styles.button"
      @click="count += step"
    >
      +
    </button>
  </div>
</template>