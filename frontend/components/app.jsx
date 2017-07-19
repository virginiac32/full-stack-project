import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="visualyze">
        <header>
          <NavBarContainer />
        </header>
        <div className="visualyze-body">
          <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
          </Switch>
        </div>
        <footer>
          <h1>Visualyze</h1>
              <a href="https://github.com/virginiac32/full-stack-project">
  				    <i className="fa fa-github fa-lg" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/virginia-chen/">
  				    <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
              </a>
        </footer>
      </div>
    );
  }
}

export default App;
