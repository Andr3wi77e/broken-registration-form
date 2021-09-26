import React from 'react';
import Router from './components/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;
