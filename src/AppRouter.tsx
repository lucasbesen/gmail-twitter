import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
