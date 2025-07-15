<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-xl p-6 shadow-md text-white">
    <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
    <ul class="space-y-2">
      <li
        v-for="(user, index) in users"
        :key="index"
        class="flex justify-between items-center text-white/80"
      >
        <span class="flex items-center gap-2">
          {{ user.name }}
        </span>
        <span class="flex items-center gap-2">
          {{ user.score }}
          <span
            class="w-3 h-3 rounded-full"
            :class="{
              'bg-green-400': user.status === 'green',
              'bg-red-400': user.status === 'red',
              'bg-gray-500': user.status === 'gray',
            }"
          ></span>
        </span>
      </li>
    </ul>

    <div class="bg-[#2a2a2a] rounded-md p-3 mt-4 flex justify-between items-center text-sm text-white/70">
      <span>{{ id }} <strong class="text-white">{{ name }}</strong></span>
      <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Você</span>
      <span>{{ yourScore }}</span>
    </div>

    <button
      class="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
    >
      Ver Grupo
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  users: { name: string; score: number; status: 'green' | 'red' | 'gray' }[];
  id: string;
  name: string;
  yourScore: number;
}>();
</script>
