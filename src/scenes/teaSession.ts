import i18n from '@/i18n';

const infusions = [
  i18n.t('infusionNumber:first'),
  i18n.t('infusionNumber:second'),
  i18n.t('infusionNumber:third'),
  i18n.t('infusionNumber:fourth'),
  i18n.t('infusionNumber:fifth'),
  i18n.t('infusionNumber:sixth'),
  i18n.t('infusionNumber:seventh'),
  i18n.t('infusionNumber:eighth'),
  i18n.t('infusionNumber:ninth'),
  i18n.t('infusionNumber:tenth'),
];
export const teaSession = (infusionNumber: number, tea: string, numberOfGuests: number) => [
  {
    text: i18n.t('teaSession:start', { tea: i18n.t(`tea:${tea}`).toLowerCase(), infusionNumber: infusions[infusionNumber - 1], count: numberOfGuests }),
    choices: ['higherTemperature', 'lowerTemperature'],
  },
  {
    text: i18n.t('teaSession:brewTime'),
    choices: ['longerBrewTime', 'shorterBrewTime'],
  },
  {
    text: i18n.t('teaSession:serve', { count: numberOfGuests }),
    action: 'hidePrevious',
  },
  {
    text: (tasteDetails: string) => i18n.t('teaSession:tasteDetails', { tasteDetails }),
    action: 'calculatePoints',
    payload: 'tasteDetails',
  },
  {
    text: (pointsPerSession: string) => i18n.t('teaSession:points', { pointsPerSession }),
    action: 'nextScene',
  },
];
