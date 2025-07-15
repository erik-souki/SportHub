<template>
  <BaseLayout>
    <header
      class="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg shadow-lg"
    >
      <h1 class="text-4xl font-extrabold text-white tracking-wide">RoarSync</h1>
      <p class="text-lg text-gray-100 mt-2">
        Bem-vindo, Supertorcedor! Sua central de torcedor está pronta.
      </p>
    </header>

    <NextGame
      v-if="nextGame && Object.keys(nextGame).length"
      v-bind="nextGame"
      class="mb-8 bg-green-100 p-6 rounded-lg shadow-md"
    />
    <div v-else class="text-red-600 font-semibold">
      Próximo jogo não carregado
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <UserStats
        v-for="stat in userStats"
        :key="stat.title"
        v-bind="stat"
        class="bg-yellow-50 p-6 rounded-lg shadow-md"
      />
      <div v-if="userStats.length === 0" class="text-red-600 font-semibold">
        Estatísticas não carregadas
      </div>
    </div>

    <section class="bg-red-50 p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-2xl font-bold text-red-800 mb-4">Ações Rápidas</h3>
      <div class="flex flex-wrap gap-4">
        <QuickAction
          v-for="action in quickActions"
          :key="action"
          :label="action"
          @action="handleAction"
        />
      </div>
    </section>

    <div class="max-w-full overflow-x-auto mb-4">
      <Ranking v-if="isRankingsLoaded" :rankings="rankings" class="inline-block" />
      <div v-else class="text-red-600 font-semibold mt-2">Ranking não carregado</div>
    </div>

    <GameSchedule
      :games="gameSchedule"
      class="bg-blue-50 p-6 rounded-lg shadow-md"
    />
    <div v-if="gameSchedule.length === 0" class="text-red-600 font-semibold">
      Agenda não carregada
    </div>
  </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";
import BaseLayout from "../components/BaseLayout.vue";
import NextGame from "../components/NextGame.vue";
import UserStats from "../components/UserStats.vue";
import QuickAction from "../components/QuickAction.vue";
import GameSchedule from "../components/GameSchedule.vue";
import Ranking from "../components/Ranking.vue";

const store = useUserStore();
const { nextGame, userStats, gameSchedule, rankings } = storeToRefs(store);

const quickActions = ref([
  "Ver todos Palpites",
  "Central de Gritos",
  "Ver Ranking Completo",
]);

const isRankingsLoaded = ref(false);

onMounted(async () => {
  try {
    await store.fetchData();
    isRankingsLoaded.value = rankings.value.length > 0;
    console.log("Dados carregados:", store.$state);
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
});

const handleAction = (action) => {
  alert(`Ação: ${action}`);
};
</script>
