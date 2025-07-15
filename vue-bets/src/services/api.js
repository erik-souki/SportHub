// src/services/api.ts
export const api = {
  async getNextGame() {
    // Simulação de API com horário atualizado (15:07 PM -03, 12/07/2025)
    return {
      league: 'Brasileirão',
      date: 'Hoje, 15:07',
      homeTeam: 'Flamengo',
      awayTeam: 'Vasco',
    };
  },

  async getUserStats() {
    return [
      { title: 'Seu Nível', value: 'Lendário', subtext: 'Nível 42' },
      { title: 'Pontos de XP', value: '12.580', subtext: '+200 XP hoje' },
      { title: 'Rank Global', value: '#2.154', subtext: 'Top 5%' },
    ];
  },

  async getGameSchedule() {
    return [
      { match: 'Corinthians vs Palmeiras', time: '19:00' },
      { match: 'São Paulo vs Santos', time: '21:00' },
      { match: 'Real Madrid vs Barcelona', time: 'Amanhã' },
    ];
  },
};