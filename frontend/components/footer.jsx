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
          <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
          <i className="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
          <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
          <i className="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
          <i className="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
          <i className="fa fa-chevron-right fa-lg" aria-hidden="true"></i>
          <i className="fa fa-chevron-left fa-lg" aria-hidden="true"></i>
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>


    </footer>
  );
};

export default Footer;
