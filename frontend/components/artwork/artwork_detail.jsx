import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
import AnnotationShowContainer from '../annotation/annotation_show_container';
// import Modal from 'react-modal';

class ArtworkDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchArtwork(this.props.match.params.artworkId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artworkId !== nextProps.match.params.artworkId) {
      this.props.fetchArtwork(nextProps.match.params.artworkId);
    }
  }

  render () {
    const {artwork,deleteArtwork} = this.props;
    if (!artwork) return null;

    return (
      <div className="artwork-detail">
        <Link to="/">Back Home</Link>
        <div className="artwork-image">
          <img className="artwork-img" src={artwork.link} alt={artwork.title} />
          <button className="delete-button" onClick={() => deleteArtwork(artwork).then(() => this.props.history.push('/'))}>Delete</button>
        </div>
        <div className="artwork-detail-bottom">
          <ul className="artwork-detailed-info">
            <li><h2><b>{artwork.title}</b></h2></li>
            <li>Artist: {artwork.artist}</li>
            <li>Date: {artwork.year}</li>
            <li>{artwork.description}</li>
          </ul>
          <div className="annotations">
            <span>Annotations</span>
            <AnnotationShowContainer />
          </div>
          <div className="comments">
            <h1>Comments</h1>
            <CommentFormContainer />
            <CommentIndexContainer />
          </div>
        </div>
    </div>
    );
  }
}

export default ArtworkDetail;
