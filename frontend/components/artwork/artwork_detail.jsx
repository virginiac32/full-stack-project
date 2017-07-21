import React from 'react';
import {Link} from 'react-router-dom';

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
        <span>{artwork.title}</span>
        <img height="900" src={artwork.link} alt={artwork.title} />
        <button className="delete-button" onClick={() => deleteArtwork(artwork)}>Delete</button>
      </div>
    );
  }
}

export default ArtworkDetail;
