/**
 * Global styles to be applied on client and server side
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root, .app-container {
    margin: 0;
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;
export default GlobalStyle;