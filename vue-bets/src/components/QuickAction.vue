<template>
  <button @click="action" class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: String,
});

const emits = defineEmits(['action']);

const action = () => {
  emits('action', props.label);
};
</script>