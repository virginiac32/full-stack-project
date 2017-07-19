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
      return <Link to ="/signup">Don't have an account? Sign Up</Link>;
    } else {
      return <Link to="/login">Already have an account? Login</Link>;
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
            {this.navLink()}
          </div>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
