import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.state.session.currentUser;
    const currentArtwork = this.props.state.artworks.currentArtwork;
    console.log(currentArtwork);
    this.state = {
        body:"",
        total_score:0,
        user_id: currentUser.id,
        artwork_id: currentArtwork
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.goBack = this.goBack.bind(this);
  }

  // goBack() {
  //   window.history.back();
  // }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({comment: this.state});
      // .then(data => {
      //       this.props.history.push(`/comments/${data.comment.id}`);
            // this.props.fetchArtwork(this.state.artwork_id);
          // });
  }

  render() {
    return (
      <div className="comment-create-update">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <h1>Comment</h1>
          <ul className="comment-form-list">
            <li>
              <input className="input" value={this.state.body} onChange={this.update('body')} placeholder="The artwork represents..." />
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
