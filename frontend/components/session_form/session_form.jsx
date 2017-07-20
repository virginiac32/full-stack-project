import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to ="/signup">Don't have an account? <b>Sign Up</b></Link>;
    } else {
      return <Link to="/login">Already have an account? <b>Login</b></Link>;
    }
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


	handleDemo(e) {
  	e.preventDefault();
	  let name = "guest";
	  let password = "password";
	  for (let i = 0; i < name.length; i++) {
	    setTimeout(() => this.setState({
	      username: name.slice(0, i + 1)}), (i * 80));
	  }
	  for (let j = 0; j < password.length; j++) {
	    setTimeout(() => this.setState({
	      password: password.slice(0, j + 1)}), ((j + 5) * 80));
	  }
	  const user = {
	    username: 'guest',
	    password: 'password'
	  };
	  setTimeout(() => this.props.guestLogin({user}), 1000);
	}


  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType}
          {this.renderErrors()}
          <div className="login-form">
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <input type="submit" value="Submit" />
						<button onClick={this.handleDemo}>Demo Login</button>
            {this.navLink()}
          </div>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
