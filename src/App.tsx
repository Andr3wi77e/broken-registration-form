import React from 'react';
import Router from './components/Router';
import { createGlobalStyle } from 'styled-components';
import { BreakFormContextProvider } from '@contexts/BreakFormContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <BreakFormContextProvider>
      <Router />
      <GlobalStyle />
    </BreakFormContextProvider>
  );
};

export default App;
