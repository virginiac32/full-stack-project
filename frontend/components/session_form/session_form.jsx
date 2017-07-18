import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
  }

  //...
}

export default withRouter(SessionForm);
