import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser,logout}) => {
  if (currentUser) {
    return (
      <div className="logged-in">
        <Link className="how" to="/how-it-works">
          <span><h2>how it works</h2></span>
        </Link>
        <Link to="/new-artwork">
          <span><h2>add artwork</h2></span>
        </Link>
        <span><h2>{currentUser.username}</h2></span>
        <button onClick={logout}>LOG OUT</button>
      </div>
    );
  } else {
    return (
      <div className="logged-out">
        <li>
          <Link className="how" to="/how-it-works"><h2>how it works</h2></Link>
        </li>
        <li>
          <Link to="/signup"><h2>sign up</h2></Link>
        </li>
        <li>
          <Link to="/login"><h2>login</h2></Link>
        </li>
      </div>
    );
  }
};

export default Greeting;
