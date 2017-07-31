import React from 'react';
import {Link} from 'react-router-dom';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
    this.timeSince = this.timeSince.bind(this);
    this.vote = this.vote.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.renderUpvoteColor = this.renderUpvoteColor.bind(this);
    this.renderDownvoteColor = this.renderDownvoteColor.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearErrors();
    }
  }

  // removed below code from renderButtons (to update annotation)
  // <button onClick={() => {this.props.closeAnnotation(); updateAnnotation(annotation).then(this.props.receiveAnnotation);}}>
  //   <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
  // </button>

  renderButtons(annotation, updateAnnotation, deleteAnnotation) {
    if (this.props.currentUser && this.props.currentUser.id === annotation.user.id) {
      return (
        <div className="action-buttons">

          <button onClick={() => {this.props.closeAnnotation(); deleteAnnotation(annotation).then(this.props.receiveAnnotation);}}>
            <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }

  handleUpvote(e) {
    e.preventDefault();
    let anno_id = parseInt(e.currentTarget.id);
    this.vote(1,anno_id);
  }

  handleDownvote(e) {
    e.preventDefault();
    let anno_id = parseInt(e.currentTarget.id);
    this.vote(-1,anno_id);
  }

  vote(value, anno_id) {
    if (this.props.currentUser) {
      const vote = {votable_id:anno_id, votable_type:"Annotation",
        user_id:this.props.currentUser.id, value: value};
      if (this.props.currentUser.votes && this.props.currentUser.votes.Annotation
        && this.props.currentUser.votes.Annotation[anno_id])
        {
          const oldVote = this.props.currentUser.votes.Annotation[anno_id];
          this.props.deleteVote(oldVote);
        } else {
          this.props.createVote({vote: vote});
      }
    }
  }

  renderUpvoteColor(anno_id) {
    let voteValue = 0;
    if (this.props.currentUser && this.props.currentUser.votes && this.props.currentUser.votes.Annotation
      && this.props.currentUser.votes.Annotation[anno_id])
      {
        voteValue = this.props.currentUser.votes.Annotation[anno_id].value;
      }
    if (voteValue === 1) {
      return (
        <span className="up-vote"><i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></span>
      );
    } else {
      return (
        <span className="no-vote"><i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></span>
      );
    }
  }

  renderDownvoteColor(anno_id) {
    let voteValue = 0;
    if (this.props.currentUser && this.props.currentUser.votes && this.props.currentUser.votes.Annotation
      && this.props.currentUser.votes.Annotation[anno_id])
      {
        voteValue = this.props.currentUser.votes.Annotation[anno_id].value;
      }
    if (voteValue === -1) {
      return (
        <span className="down-vote"><i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></span>
      );
    } else {
      return (
        <span className="no-vote"><i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></span>
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
    const {annotation, currentUser, artwork, deleteAnnotation,updateAnnotation, createAnnotation} = this.props;

    if (!annotation) return null;

    return (
      <div className="annotation-body" style={this.props.style}>
        <li className="exit-icon">
          <i className="fa fa-times fa-lg" aria-hidden="true" onClick={this.props.closeAnnotation}></i>
        </li>
        <li className="comment-info"><h2>{annotation.user.username}</h2></li>
          <li className="time-since">{this.timeSince(annotation.created_at)}</li>
          <li className="this-comment">{annotation.body}</li>
        <div className="annotation-actions">
          <div className="votes">
            <button onClick={this.handleUpvote} id={annotation.id}>
              {this.renderUpvoteColor(annotation.id)}
            </button>
            <div className="total-score">{this.props.annotation.total_score}</div>
            <button onClick={this.handleDownvote} id={annotation.id}>
              {this.renderDownvoteColor(annotation.id)}
            </button>
          </div>
          {this.renderButtons(annotation,updateAnnotation,deleteAnnotation)}
        </div>
    </div>
    );
  }
}

export default AnnotationShow;
