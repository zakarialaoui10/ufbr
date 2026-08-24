<script setup>
import Counter from "@components/Counter.vue";

defineProps({
  slug: String,
});
</script>

<template>
  <Counter
    :start="Number(slug.split('/')[0])"
    :step="Number(slug.split('/')[1]) || 1"
  />
</template>