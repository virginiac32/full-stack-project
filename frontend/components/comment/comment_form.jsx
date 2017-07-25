import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("artwork",this.props.state.artworks.currentArtwork);
    let currentUser = null;
    if (this.props.state.session.currentUser) {
      currentUser = this.props.state.session.currentUser;
    }
    const currentArtwork = this.props.state.artworks.currentArtwork;

    this.state = {
        body:"",
        total_score:0,
        user_id: currentUser,
        artwork_id: this.props.state.artworks.currentArtwork
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.user_id === null) {
      this.props.history.push(`/login`);
    }
    this.props.createComment({comment: this.state}).then(() =>
    (this.refs.comment_body.value = ""));
  }

  render() {
    return (
      <div className="comment-create-update">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <h2>Write a comment:</h2>
          <ul className="comment-form-list">
            <li>
              <textarea rows="6" cols="50" ref="comment_body" value={this.state.body} onChange={this.update('body')} placeholder="The artwork represents..." />
            </li>
            <li>
              <button className="submit-button">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);
