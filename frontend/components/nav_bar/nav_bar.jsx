import GreetingContainer from '../greeting/greeting_container';
import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="nav-bar">
        <h1>Visualyze</h1>
        <GreetingContainer />
      </div>
    );
  }
}

export default NavBar;
