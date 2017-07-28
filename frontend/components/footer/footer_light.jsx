import React from 'react';
import {Link} from 'react-router-dom';

const FooterLight = () => {

  return (
    <footer id="footer-light">
      <img className="footer-logo" height="45" src="http://res.cloudinary.com/virginia-chen/image/upload/v1500533990/logo_frxltw.png" alt="Logo" />
        <h2>Crowdsourced art knowledge</h2>
          <a href="https://github.com/virginiac32/full-stack-project" target="_blank">
          <i id="github" className="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/virginia-chen/" target="_blank">
          <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
          </a>
    </footer>
  );
};

export default FooterLight;
