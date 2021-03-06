import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    let currentUser = null;
    const currentArtwork = this.props.state.artworks.currentArtwork;

    if (this.props.state.session.currentUser) {
      currentUser = this.props.state.session.currentUser;
      this.state = {
          body:"",
          total_score:0,
          user_id: currentUser.id,
          artwork_id: this.props.state.artworks.currentArtwork
      };
    } else {
      this.state = {
          body:"",
          total_score:0,
          user_id: currentUser,
          artwork_id: this.props.state.artworks.currentArtwork
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearErrors();
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.user_id === null) {
      this.props.history.push(`/login`);
    }
    this.props.createComment({comment: this.state}).then(() => {
    this.props.clearErrors();
    this.refs.comment_body.value = "";
    document.body.scrollTop = document.body.scrollHeight;
    });
  }

  renderSubmit() {
    if (this.state.user_id === null) {
      return (
        <Link className="comment-login-link" to="/login">Login to Comment</Link>
      );
    } else {
      return (
        <button className="submit-button">Post</button>
      );
    }
  }

  render() {
    return (
      <div className="comment-create">
        <form className="comment-form-all" onSubmit={this.handleSubmit}>
          <ul className="comment-form-list">
            <li>
              <textarea className="comment-form" rows="6"
                ref="comment_body" value={this.state.body}
                onChange={this.update('body')} placeholder="Write a response..." />
            </li>
            <li>
              {this.renderSubmit()}
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);
