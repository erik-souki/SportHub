<template>
  <div>
    <h1 class="text-xl font-bold mb-4">🎯 Mercado de Apostas</h1>
    <div class="grid gap-4">
      <OddCard
        v-for="match in matches"
        :key="match.id"
        :match="match"
        @select="addToBetSlip"
      />
    </div>
  </div>
</template>

<script setup>
import { useMockMatches } from '../composables/useMockMatches'
import OddCard from '../components/OddCard.vue'

const { matches } = useMockMatches()

function handleSelection(data) {
  console.log('Aposta:', data)
}
</script>
