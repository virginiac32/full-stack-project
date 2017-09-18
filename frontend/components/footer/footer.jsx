import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id = "footer-dark";
    if (this.props.type === 'light') {
      id = "footer-light";
    }

    return (
      <footer id={id}>
        <img className="footer-logo" height="45" src="http://res.cloudinary.com/dzqodddmb/image/upload/v1503608498/logo_djyd79.png" alt="Logo" />
        <div>
          <a href="https://github.com/virginiac32/full-stack-project" target="_blank">
          <i id="github" className="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/virginia-chen/" target="_blank">
          <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
