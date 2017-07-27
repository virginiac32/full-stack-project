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
    this.renderUpvoteColor = this.renderUpvoteColor.bind(this);
    this.renderDownvoteColor = this.renderDownvoteColor.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchArtwork(this.props.artwork.id);
  // }

  renderDelete(comment, deleteComment) {
    if (this.props.currentUser && this.props.currentUser.id === comment.user.id) {
      return (
        <button className="action-buttons" onClick={() => deleteComment(comment)}>
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
        console.log(this.props.currentUser);
      if (this.props.currentUser.votes && this.props.currentUser.votes.Comment
        && this.props.currentUser.votes.Comment[comment_id])
        {
          const oldVote = this.props.currentUser.votes.Comment[comment_id];
          this.props.deleteVote(oldVote);
        } else {
          this.props.createVote({vote: vote});
      }
    }
  }

  renderUpvoteColor(comment_id) {
    let voteValue = 0;
    if (this.props.currentUser && this.props.currentUser.votes && this.props.currentUser.votes.Comment
      && this.props.currentUser.votes.Comment[comment_id])
      {
        voteValue = this.props.currentUser.votes.Comment[comment_id].value;
      }
    if (voteValue === 1) {
      return (
        <span className="up-vote"><i className="fa fa-arrow-up fa-lg" aria-hidden="true"></i></span>
      );
    } else {
      return (
        <span className="no-vote"><i className="fa fa-arrow-up fa-lg" aria-hidden="true"></i></span>
      );
    }
  }

  renderDownvoteColor(comment_id) {
    let voteValue = 0;
    if (this.props.currentUser && this.props.currentUser.votes && this.props.currentUser.votes.Comment
      && this.props.currentUser.votes.Comment[comment_id])
      {
        voteValue = this.props.currentUser.votes.Comment[comment_id].value;
      }
    if (voteValue === -1) {
      return (
        <span className="down-vote"><i className="fa fa-arrow-down fa-lg" aria-hidden="true"></i></span>
      );
    } else {
      return (
        <span className="no-vote"><i className="fa fa-arrow-down fa-lg" aria-hidden="true"></i></span>
      );
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
    const {comments, deleteComment, updateComment, createComment,
      createVote, deleteVote} = this.props;
    if (!comments) return null;

    return (
      <ul className="full-comments">
        {Object.values(comments).map(comment =>
          <ul className="each-comment" key={`comment-key-${comment.id}`}>
            <li><span className="comment-info"><h2>{comment.user.username}</h2>{this.renderDelete(comment,deleteComment)}</span></li>
            <li className="time-since">{this.timeSince(comment.created_at)}</li>
          <li className="this-comment">{comment.body}</li>
            <div className="votes">
              <button onClick={this.handleUpvote} id={comment.id}>
                {this.renderUpvoteColor(comment.id)}
              </button>
              {comment.total_score}
              <button onClick={this.handleDownvote} id={comment.id}>
                {this.renderDownvoteColor(comment.id)}
              </button>
            </div>
          </ul>
        )}
      </ul>
    );
  }
}

export default CommentIndex;
