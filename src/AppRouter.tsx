import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';

const AppRouter: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default AppRouter;
