<template>
  <span :class="{
    'text-green-400': status === 'green',
    'text-red-400': status === 'red',
    'text-gray-500': status === 'gray'
  }">
    ●
  </span>
</template>

<script setup lang="ts">
defineProps<{ status: 'green' | 'red' | 'gray' }>();
</script>
