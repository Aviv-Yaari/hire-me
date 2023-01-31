import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  text: {
    primary: '#111',
    secondary: '#0070f3',
    link: '#285ae6'
  },
  background: {
    primary: '#eee',
    secondary: 'white'
  },
  buttons: {
    primaryBg: '#222831',
    secondaryBg: 'white',
    primaryText: 'white',
    primaryHoverBg: '#393E46',
    secondaryText: '#111',
    secondaryHoverBg: '#eee'
  },
  tag: {
    bg: '#fbfbfb',
    border: "#d9d9d9"
  }
}

export const mobileBreakpoint = `(min-width: 768px)`;

export default theme;