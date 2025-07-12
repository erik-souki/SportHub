export function useMockMatches() {
  const matches = [
    {
      id: 1,
      teams: 'Flamengo x Palmeiras',
      date: '12/07/2025 20:00',
      odds: {
        V1: 1.9,
        X: 3.2,
        V2: 4.1,
      },
    },
    {
      id: 2,
      teams: 'Grêmio x Inter',
      date: '13/07/2025 18:00',
      odds: {
        V1: 2.1,
        X: 3.0,
        V2: 3.6,
      },
    },
  ];

  return { matches };
}
