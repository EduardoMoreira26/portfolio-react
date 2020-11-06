import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #121214;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, hanging-punctuation, strong {
    font-weight: 500;
  }
`;