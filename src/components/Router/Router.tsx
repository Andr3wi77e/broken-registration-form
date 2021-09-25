import React from 'react';
import { IRouter } from './interface';
import { BrowserRouter, Route } from 'react-router-dom';
import useRoutes from './useRoutes';

const Router = ({}: IRouter) => {
  const routes = useRoutes();
  return (
    <BrowserRouter>
      {routes.map(({ path, component }) => (
        // @ts-ignore
        <Route key={path} component={component} />
      ))}
    </BrowserRouter>
  );
};

export default Router;
