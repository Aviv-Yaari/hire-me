import { createGlobalStyle } from 'styled-components'
import { mobileBreakpoint } from './theme'

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 14px;
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.background.primary};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    @media (${mobileBreakpoint}) {
      font-size: 16px;
    }
  }

  h1, h2 {
    font-size: 3rem;

    @media (${mobileBreakpoint}) {
      font-size: 4rem;
    }
  }

  button {
    border: none;
    background: inherit;
    padding: 0;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.text.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  li, p {
    line-height: 1.75;
  }

`

export default GlobalStyle