export const end = (totalPoints: number) => [
  {
    text: `You have finished the tea session. Total points: ${totalPoints}.`,
    action: 'endGame',
  },
];
