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
import NavBar from './nav_bar/nav_bar';
import HowTo from './how_to';
import ArtworkIndexContainer from './artwork/artwork_index_container';
import ArtworkDetailContainer from './artwork/artwork_detail_container';
import ArtworkCreateContainer from './artwork/artwork_create_container';
import {AnnotationUpdateFormContainer, AnnotationCreateFormContainer} from './annotation/annotation_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="visualyze">
        <header>
          <NavBar />
        </header>
        <div className="visualyze-body">
          <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <Route exact path="/" component={ArtworkIndexContainer} />
            <Route exact path="/artworks/:artworkId" component={ArtworkDetailContainer} />
            <Route exact path="/how-it-works" component={HowTo} />
            <ProtectedRoute exact path="/new-artwork" component={ArtworkCreateContainer} />
            <ProtectedRoute exact path="/annotations/:annotationId/edit" component={AnnotationUpdateFormContainer} />
            <ProtectedRoute exact path="/artworks/:artworkId/new-annotation" component={AnnotationCreateFormContainer} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
