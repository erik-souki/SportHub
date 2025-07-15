<template>
  <div class="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
    <h4 class="text-lg font-semibold text-yellow-800 mb-2">{{ title }}</h4>
    <p class="text-3xl font-bold text-yellow-900 mb-2">{{ value }}</p>
    <p class="text-yellow-600">{{ subtext }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  value: String,
  subtext: String,
});
</script>''