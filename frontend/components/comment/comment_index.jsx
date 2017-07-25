import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderDelete = this.renderDelete.bind(this);
    this.timeSince = this.timeSince.bind(this);
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

  renderVote(value, comment, createVote, deleteVote) {
    if (this.props.currentUser) {
      const vote = {votable_id:comment.id, votable_type:"Comment",
        user_id:this.props.currentUser.id, value: value};
    }
    return (
      <div>
        <button onClick={createVote.bind(null,vote)}>
          <i className="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
        </button>
        <button onClick={deleteVote.bind(null,vote)}>
          <i className="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
        </button>
      </div>
    );
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
      <ul>
        {Object.values(artwork.comments).map(comment =>
          <ul>
            <li><h2>{comment.user.username}</h2>   {this.timeSince(comment.created_at)}</li>
            <li>{comment.body}</li>
              <li>{this.renderDelete(comment,deleteComment)}
            </li>
          </ul>
        )}
      </ul>
    );
  }
}

export default CommentIndex;
