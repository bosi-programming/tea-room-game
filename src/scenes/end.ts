import i18n from '@/i18n';

export const end = (totalPoints: number) => [
  {
    text: i18n.t('end:endMessage', { totalPoints }),
    action: 'endGame',
  },
];
