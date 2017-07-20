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
        <Link to="/">
          <img className="nav-logo" height="40" src="http://res.cloudinary.com/virginia-chen/image/upload/v1500567526/logo_full_mghizl.png" alt="Logo" />
        </Link>
      <GreetingContainer />
      </div>
    );
  }
}

export default NavBar;
