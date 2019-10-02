const colors = {
  black: '#232323',
  blue: '#3ca1df',
  blueDark: '#2d5d95',
  blueLight: '#CDECFF',
  green: '#63bab0',
  greenDark: '#04575b',
  greenLight: '#79e9dd',
  greenXLight: '#ebfcfa',
  grayLight: '#dfdfdf',
  gray: '#999999',
  grayDark: '#666666',
  offBlack: '#484848',
  offWhite: '#f7f7f7',
  red: '#c34848',
  redDark: '#9c292d',
  redLight: '#f7e2e2',
  white: '#ffffff',
  yellow: '#ffc58b',
  yellowLight: '#fceddf',
  yellowDark: '#594430',
}

const fontSizes = [10, 12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
const space = [0, 4, 8, 16, 32, 64, 128, 256]

export default {
  borders: [0, '1px solid', '2px solid'],
  breakpoints: ['960px', '1200px', '1400px'],
  colors,
  fontSizes,
  fonts: ['-apple-system, BlinkMacSystemFont, sans-serif'],
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  lineHeight: '1.5',
  listTypes: ['none', 'disc'],
  space,
}
