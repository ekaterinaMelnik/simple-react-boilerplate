import * as React from 'react';
import { Route } from 'react-router-dom';

export const routesMapper = routes =>
  routes.map((route, i) => {
    return <Route
      key={i}
      {...route}
      component={route.component}
    />;
  });
