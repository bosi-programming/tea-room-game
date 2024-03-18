const infusions = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
];
export const teaSession = (infusionNumber: number, tea: string) => [
  {
    text: `You start to prepare the ${
      infusions[infusionNumber - 1]
    } infusion of your ${tea} tea for your guests. What to you want to focus on?`,
    choices: ['higherTemperature', 'lowerTemperature'],
  },
  {
    text: 'What more do you want to focus on?',
    choices: ['longerBrewTime', 'shorterBrewTime'],
  },
  {
    text: 'You serve the tea. You and the guests start to drink the tea.',
    action: 'hidePrevious',
  },
  {
    text: (tasteDetails: string) =>
      `You taste the tea. It tastes ${tasteDetails}.`,
    action: 'calculatePoints',
    payload: 'tasteDetails',
  },
  {
    text: (pointsPerSession: string) =>
      `Your points for this session is ${pointsPerSession}.`,
    action: 'nextScene',
  },
];
