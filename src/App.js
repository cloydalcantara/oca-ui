import React, { Component } from 'react';
import { Route } from 'react-router4-with-layouts';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { loginLayout } from './layouts/login';
// import { dashboardLayout } from './layouts/dashboard';
// import { Dashboard } from './pages/dashboard/index';
import { Login } from './pages/login/index';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history} basename={`${process.env.PUBLIC_URL}`} >
        <Switch>
          {/* <Route path="/" component={Dashboard} exact layout={dashboardLayout} /> */}
          <Route path="/login" component={Login} layout={loginLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
