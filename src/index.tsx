import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, ApolloProvider } from '../providers';
import App from './App';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    font-family: helvetica;
    background-color: rgb(17, 21, 28);
  }
  * {
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    box-sizing: border-box;
    background-color: inherit;
    color: white;
  }
  h1 { font-size: 36px; color: black; }
  h2 { font-size: 32px; }
  h3 { font-size: 28px; }
  h4, label { font-size: 24px; }
  h5 { font-size: 20px; }
  h6, p, div { font-size: 16px; }
  small { font-size: 12px; }

  h1, h2 { font-family: impact; }
  label, small {
    font-family: Garamond, 'Trebuchet MS', Times, serif;
    font-style: italic;
  }
`;

const container = document.getElementById('root') as Element;
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <ApolloProvider>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </ThemeProvider>,
);
