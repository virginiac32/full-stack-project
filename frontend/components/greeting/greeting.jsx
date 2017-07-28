import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser,logout}) => {
  if (currentUser) {
    return (
      <div className="logged-in">
        <Link className="add-artwork" to="/new-artwork">
          <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
          <span><h2>Add Artwork</h2></span></Link>
        <span><h2>{currentUser.username}</h2></span>
        <button onClick={logout}>LOG OUT</button>
      </div>
    );
  } else {
    return (
      <div className="logged-out">
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </div>
    );
  }
};

export default Greeting;
