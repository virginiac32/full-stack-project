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
import ArtworkIndexContainer from './artwork/artwork_index_container';
import ArtworkDetailContainer from './artwork/artwork_detail_container';
import Footer from './footer';
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
            <Route exact path="/" component={ArtworkIndexContainer} />
            <Route exact path="/artworks/:artworkId" component={ArtworkDetailContainer} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
