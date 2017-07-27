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
      artwork: this.props.artwork
    };

  }

  componentDidMount(){
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
        });
    }
  }

  // componentWillUnmount() {
  //    = null;
  // }

  render () {
    const {artwork,deleteArtwork, annotations,comments} = this.props;
    if (!artwork) return null;

    // if (this.props.artwork === null) {
    //   return (
    //     <i className="fa fa-spinner fa-lg" aria-hidden="true"></i>
    //   );
    // } else {

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

export default ArtworkDetail;
