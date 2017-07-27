import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
// import AnnotationShowContainer from '../annotation/annotation_show_container';
import AnnotationPointers from '../annotation/annotation_pointers';
// import {AnnotationCreateFormContainer} from '../annotation/annotation_form_container';

class ArtworkDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: this.props.annotations,
      user: this.props.currentUser,
      artwork: this.props.artwork,
      spinner: true
    };

  }

  componentDidMount(){
    setTimeout(this.setState({spinner: false}), 5000);
    this.props.fetchArtwork(this.props.match.params.artworkId)
    .then(
      () => {
        this.props.fetchComments(this.props.artwork.id);
        this.props.fetchAnnotations(this.props.artwork.id);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artworkId !== nextProps.match.params.artworkId) {
      this.props.fetchArtwork(nextProps.match.params.artworkId)
        .then(
          () => {
            this.props.fetchComments(nextProps.match.params.artworkId);
            this.props.fetchAnnotations(nextProps.match.params.artworkId);
            this.props.clearErrors();
        });
    }
  }

  componentWillUnmount() {
     this.props.clearErrors();
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

  render () {
    const {artwork,deleteArtwork, annotations,comments} = this.props;
    if (!artwork) return null;

    if (this.state.spinner === true) {
      return (
        <i className="fa fa-spinner fa-5x" aria-hidden="true"></i>
      );
    } else {

      return (
        <div className="artwork-detail">
          <Link to="/">Back Home</Link>
          <AnnotationPointers annotations={annotations} artwork={artwork}/>
          <button className="delete-button" onClick={() => deleteArtwork(artwork).then(() => this.props.history.push('/'))}>Delete</button>
          <div className="artwork-detail-bottom">
            <ul className="artwork-detailed-info">
              <li><h2><b>{artwork.title}</b></h2></li>
              <li>Artist: {artwork.artist}</li>
              <li>Date: {artwork.year}</li>
              <li>{artwork.description}</li>
              {this.renderErrors()}
            </ul>
            <div className="comments">
              <h2>RESPONSES</h2>
              <CommentFormContainer />
              <CommentIndexContainer comments={comments}/>
            </div>
          </div>
      </div>
      );
    }
  }
}

export default ArtworkDetail;
