import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser,logout}) => {
  if (currentUser) {
    return (
      <div>
        <h1>Welcome to Visualyze</h1>
        <h2>Hi {currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

      </div>
    );
  }
};

export default Greeting;
