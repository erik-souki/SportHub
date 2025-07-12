<template>
  <div class="border rounded p-4 shadow hover:bg-gray-100 cursor-pointer">
    <h3 class="font-bold text-lg">{{ match.teams }}</h3>
    <p class="text-sm text-gray-600">{{ match.date }}</p>

    <div class="flex justify-between mt-3">
      <button
        v-for="(odd, outcome) in match.odds"
        :key="outcome"
        @click="$emit('select', { matchId: match.id, outcome, odd })"
        class="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
      >
        {{ outcome }}: {{ odd }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OddCard',
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
};
</script>
