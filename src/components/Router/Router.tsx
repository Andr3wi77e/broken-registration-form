import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import useRoutes from './useRoutes';

const Router = () => {
  const routes = useRoutes();
  return (
    <BrowserRouter>
      {routes.map(({ path, component }) => (
        <Route key={path} component={component} />
      ))}
    </BrowserRouter>
  );
};

export default Router;
