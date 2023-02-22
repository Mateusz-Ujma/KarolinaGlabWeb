import { createGlobalStyle } from 'styled-components';
import cursor from 'assets/images/cursorbig.png';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    cursor: url(${cursor}),auto;
    margin: 0;
    font-family: 'Oswald', sans-serif;
    padding: 0;
    background-color: #e4b3ae;
    display: flex;
    flex-direction:column;
   overflow-x:hidden;
  }
  a, button {
    font-family: 'Oswald', sans-serif;
  }
`;
