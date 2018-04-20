import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from './utils/routes'
import MainNav from '../src/Scene/MainNav';
import SubNav from '../src/Scene/SubNav';

class App extends Component {
  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <BrowserRouter>
        <div>
          <MainNav />
          <SubNav />
          <Switch>
            {routeComponents}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}


export default (App);
