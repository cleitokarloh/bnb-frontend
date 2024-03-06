import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  html {
    font-size: 1rem;
  }

  :focus {
    outline: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
    font-size: ${({ theme }) => theme['body-font-size']};
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  button {
    all: unset;
  }


`
