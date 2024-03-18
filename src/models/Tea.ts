export const teas: Record<string, Record<string, string[]>> = {
  green: {
    higherTemperature: ['strong', 'bitter'],
    lowerTemperature: ['light', 'salty'],
    longerBrewTime: ['mellow'],
    shorterBrewTime: ['weak'],
  },
  black: {
    higherTemperature: ['dark', 'bitter'],
    lowerTemperature: ['light', 'salty'],
    longerBrewTime: ['strong', 'salty'],
    shorterBrewTime: ['weak', 'mellow'],
  },
  ripe: {
    higherTemperature: ['strong', 'sweet'],
    lowerTemperature: ['light', 'salty'],
    longerBrewTime: ['dark', 'velvety'],
    shorterBrewTime: ['weak', 'salty'],
  },
  raw: {
    higherTemperature: ['strong', 'bitter'],
    lowerTemperature: ['light', 'salty'],
    longerBrewTime: ['mellow'],
    shorterBrewTime: ['weak'],
  },
};
