import GreetingContainer from '../greeting/greeting_container';
import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {

  render () {
    return (
      <div className="nav-bar">
        <Link className="logo-slogan" to="/">
          <img className="nav-logo" height="35" src="http://res.cloudinary.com/dzqodddmb/image/upload/v1503608506/logo_full_g7fjey.png" alt="Logo" />
          <span className="slogan"><h2>crowdsourced art annotation</h2></span>
      </Link>
      <GreetingContainer />
      </div>
    );
  }
}

export default NavBar;
