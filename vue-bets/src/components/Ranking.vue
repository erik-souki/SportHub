<template>
  <div class="bg-neutral-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-full">
    <h2 class="text-2xl font-extrabold text-white mb-6 border-b border-neutral-700 pb-2">
      Ranking de Torcedores
    </h2>
    <div class="grid gap-4">
      <div
        v-for="(user, index) in rankings"
        :key="index"
        class="flex items-center justify-between p-4 rounded-lg transition-colors duration-300"
        :class="' text-white'"
        :style="{ boxShadow: index < 3 ? '0 4px 12px rgba(0,0,0,0.2)' : '0 2px 6px rgba(0,0,0,0.1)' }"
      >
        <span class="text-lg font-extralight">{{ user.position }}</span>
        <span class="text-lg font-medium">{{ user.name }}</span>
        <span class="text-lg font-medium">{{ user.points }} pts</span>
      </div>
    </div>
    <p v-if="!rankings || rankings.length === 0" class="text-red-400 mt-4 font-medium">
      Nenhum ranking disponível
    </p>
  </div>
</template>

<script setup>
defineProps({
  rankings: {
    type: Array,
    default: () => [],
  },
});
</script>
