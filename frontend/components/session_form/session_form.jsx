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
		this.handleGuest = this.handleGuest.bind(this);
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

	handleGuest(e) {
		// const guest = {username:"guest", password:"password"};
		// console.log(guest);
		e.preventDefault();
		// setInterval(() => this.setState(guest), 1000);
		this.setState({username:"guest", password:"password"},
			() => {const user = Object.assign({},this.state);
						this.props.guestLogin(user);
					});
		// setInterval(() => this.props.processForm({guest}), 3000);

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
							<form onSubmit={this.handleGuest}>
								<input type="submit" value='Demo Login' />
							</form>
            {this.navLink()}
          </div>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
