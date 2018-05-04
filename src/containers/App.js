import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../helpers';
import { routeConstants } from '../constants';
import { Home, Login } from '../components/pages';
import { GlobalLayout } from '../components/layout';


function App() {
  return (
    <Router history={history}>
      <GlobalLayout>
        <Switch>
          <Route exact path={routeConstants.PAGE_HOME} component={Home} />
          <Route path={routeConstants.PAGE_LOGIN} component={Login} />
        </Switch>
      </GlobalLayout>
    </Router>
  );
}

export {
  App,
  routeConstants,
};
