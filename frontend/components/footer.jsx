import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <h1>Visualyze</h1>
        <h3>Crowdsourced art knowledge</h3>
          <a href="https://github.com/virginiac32/full-stack-project">
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/virginia-chen/">
          <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
          </a>
    </footer>
  );
};

export default Footer;
