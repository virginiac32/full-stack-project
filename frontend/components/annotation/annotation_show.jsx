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

  // componentWillMount(){
  //   this.props.fetchArtwork(this.props.artwork.id);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.annotationId !== nextProps.match.params.annotationId) {
  //     this.props.fetchAnnotation(nextProps.match.params.annotationId);
  //   }
  // }

  renderButtons(annotation, updateAnnotation, deleteAnnotation) {
    if (this.props.currentUser && this.props.currentUser.id === annotation.user.id) {
      return (
        <div>
          <button onClick={() => updateAnnotation(annotation)}>
            <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
          </button>
          <button onClick={() => deleteAnnotation(annotation)}>
            <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }

  handleUpvote(e) {
    e.preventDefault();
    let anno_id = parseInt(e.currentTarget.id);
    console.log(anno_id);
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
    if (this.props.currentUser.votes && this.props.currentUser.votes.Annotation
      && this.props.currentUser.votes.Annotation[anno_id])
      {
        voteValue = this.props.currentUser.votes.Annotation[anno_id].value;
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

  renderDownvoteColor(anno_id) {
    let voteValue = 0;
    if (this.props.currentUser.votes && this.props.currentUser.votes.Annotation
      && this.props.currentUser.votes.Annotation[anno_id])
      {
        voteValue = this.props.currentUser.votes.Annotation[anno_id].value;
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
    const {artwork,deleteAnnotation,updateAnnotation, createAnnotation} = this.props;
    // let annotation = null;
    // let annotations = this.props.artwork.annotations;
    // if (this.props.artwork.annotations) {
    //   annotation = this.props.artwork.annotations[this.props.currentAnnotation];
    // }
    console.log("art",artwork);
    if (!artwork.annotations) return null;

    return (
      <div className="annotation-body">
          {Object.values(artwork.annotations).map(anno =>
            <ul key={`anno-key-${anno.id}`}>
              <li>By: {anno.user.username}</li>
              <li className="time-since">{this.timeSince(anno.created_at)}</li>
              <li>{anno.body}</li>
            {this.renderButtons(anno,updateAnnotation,deleteAnnotation)}
            <div className="annotation-votes">
              <button onClick={this.handleUpvote} id={anno.id}>
                {this.renderUpvoteColor(anno.id)}
              </button>
              {anno.total_score}
              <button onClick={this.handleDownvote} id={anno.id}>
                {this.renderDownvoteColor(anno.id)}
              </button>
            </div>
          </ul>
        )}
    </div>
    );
  }
}

export default AnnotationShow;
