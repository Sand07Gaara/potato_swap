import { Theme } from '@emotion/react'

const theme: Theme = {
  colors: {
    primary: '#bb8e2a',
    primaryOnDark: '#f9ebef',
    additionalColors: {
      green: '#24bc98',
    },
    background: {
      main: '#ffecc9',
      light: '#613e14',
      dark: '#613e14',
      alternativeDark: '#9f6a29',
    },
    button: {
      background: {
        hover: '#815b23',
        press: '#bb8e2a',
        disabled: '#bc244a',
        light: 'rgba(153, 110, 119, 0.2)',
      },
    },
    text: {
      main: '#ffffff',
      dark: '#272324',
      placeholder: '#996E77',
    },
    border: {
      main: 'rgba(153, 110, 119, 0.4)',
      primaryOnDark: '#cfbe45',
    },
  },
  borderRadius: {
    extraSmall: '4px',
    small: '8px',
    normal: '12px',
    large: '20px',
  },
  boxShadow: {
    primary: '10px 16px 80px rgba(156, 46, 73, 0.36);',
  },
}

export default theme
