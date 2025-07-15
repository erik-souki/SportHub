<template>
  <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>
