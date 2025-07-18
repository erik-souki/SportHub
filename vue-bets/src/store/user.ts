import { defineStore } from 'pinia';
import { api } from '../services/api'; // Crie este arquivo conforme abaixo

export const useUserStore = defineStore('user', {
  state: () => ({
    // Dados do usuário (se já existirem, mantenha-os)
    user: { name: 'Supertorcedor' }, // Exemplo, ajuste conforme necessário
    // Dados da homepage
    nextGame: {} as { league: string; date: string; homeTeam: string; awayTeam: string },
    userStats: [] as { title: string; value: string; subtext: string }[],
    gameSchedule: [] as { match: string; time: string }[],
    rankings: [] as { position: number; name: string; points: number }[],
    isRankingsLoaded: false,
  }),
  actions: {
    async fetchData() {
      this.nextGame = await api.getNextGame();
      this.userStats = await api.getUserStats();
      this.gameSchedule = await api.getGameSchedule();
      this.rankings = [
        { position: 1, name: 'Supertorcedor', points: 12580 },
        { position: 2, name: 'FlaMania', points: 11500 },
        { position: 3, name: 'VascoRei', points: 10800 },
      ];
      this.isRankingsLoaded = true; 
    },
    
  },
});