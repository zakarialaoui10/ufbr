<script setup>
import Delay from "@components/Delay.vue";

const delay = 1000;

console.log(typeof delay, delay);
</script>

<template>
  <Delay :delay="delay">
    <template #fallback>
      <p>Loading...</p>
    </template>

    <p>This appears after {{ delay }} ms.</p>
  </Delay>
</template>