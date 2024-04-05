import i18n from '@/i18n';
export const tastes = {
  bitter: i18n.t('taste:bitter'),
  dark: i18n.t('taste:dark'),
  light: i18n.t('taste:light'),
  mellow: i18n.t('taste:mellow'),
  salty: i18n.t('taste:salty'),
  strong: i18n.t('taste:strong'),
  sweet: i18n.t('taste:sweet'),
  velvety: i18n.t('taste:velvety'),
  weak: i18n.t('taste:weak'),
};
export const teas: Record<string, Record<string, string[]>> = {
  green: {
    higherTemperature: [tastes.strong, tastes.bitter],
    lowerTemperature: [tastes.light, tastes.salty],
    longerBrewTime: [tastes.mellow],
    shorterBrewTime: [tastes.weak],
  },
  black: {
    higherTemperature: [tastes.dark, tastes.bitter],
    lowerTemperature: [tastes.light, tastes.salty],
    longerBrewTime: [tastes.strong, tastes.salty],
    shorterBrewTime: [tastes.weak, tastes.mellow],
  },
  ripe: {
    higherTemperature: [tastes.strong, tastes.sweet],
    lowerTemperature: [tastes.light, tastes.salty],
    longerBrewTime: [tastes.dark, tastes.velvety],
    shorterBrewTime: [tastes.weak, tastes.salty],
  },
  raw: {
    higherTemperature: [tastes.strong, tastes.bitter],
    lowerTemperature: [tastes.light, tastes.salty],
    longerBrewTime: [tastes.mellow],
    shorterBrewTime: [tastes.weak],
  },
};
