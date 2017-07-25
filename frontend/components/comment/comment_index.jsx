import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderDelete = this.renderDelete.bind(this);
    this.timeSince = this.timeSince.bind(this);
    this.vote = this.vote.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtwork(this.props.artwork.id);
  }

  renderDelete(comment, deleteComment) {
    if (this.props.currentUser.id === comment.user.id) {
      return (
        <button onClick={deleteComment.bind(null,comment)}>
          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
        </button>
      );
    }
  }

  handleUpvote(e) {
    e.preventDefault();
    let comment_id = parseInt(e.currentTarget.id);
    this.vote(1,comment_id);
  }

  handleDownvote(e) {
    e.preventDefault();
    let comment_id = parseInt(e.currentTarget.id);
    this.vote(-1,comment_id);
  }

  vote(value, comment_id) {
    if (this.props.currentUser) {
      const vote = {votable_id:comment_id, votable_type:"Comment",
        user_id:this.props.currentUser.id, value: value};

      if (this.props.currentUser.votes[comment_id]) {
        const oldVote = this.props.currentUser.votes[comment_id];
        this.props.deleteVote(oldVote);
      } else {
        this.props.createVote(vote);
      }
    }
  }

  timeSince(date) {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " yrs ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hrs ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " mins ago";
    }
    return "0 mins ago";
  }

  render () {
    const {artwork, deleteComment, updateComment, createComment,
      createVote, deleteVote} = this.props;
    if (!artwork.comments) return null;
    return (
      <ul className="full-comments">
        {Object.values(artwork.comments).map(comment =>
          <ul className="each-comment">
            <li><span className="comment-info"><h2>{comment.user.username}</h2><span className="time-since">{this.timeSince(comment.created_at)}</span>{this.renderDelete(comment,deleteComment)}</span></li>
            <li>{comment.body}</li>
            <div className="comment-votes">
              <button onClick={this.handleUpvote}>
                <i className="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
              </button>
              {comment.total_score}
              <button onClick={this.handleDownvote}>
                <i className="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
              </button>
            </div>
          </ul>
        )}
      </ul>
    );
  }
}

export default CommentIndex;
