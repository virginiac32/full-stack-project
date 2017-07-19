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
          <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
          </Switch>
          <footer></footer>
      </div>
    );
  }
}

export default App;
