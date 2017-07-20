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
        <img className="logo" height="45" src="http://res.cloudinary.com/virginia-chen/image/upload/v1500533990/logo_frxltw.png" alt="Logo" />
        <h1><b>VISUALYZE</b></h1>
        <GreetingContainer />
      </div>
    );
  }
}

export default NavBar;
