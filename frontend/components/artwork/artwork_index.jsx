import React from 'react';
import {Link} from 'react-router-dom';
import ArtworkIndexItem from './artwork_index_item';

class ArtworkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchArtworks();
  }

  render () {
    const {artworks, deleteArtwork} = this.props;
    return (
      <div className="artwork-index">
        <ul className="artwork-list">
          {artworks.map(artwork => <ArtworkIndexItem key={artwork.id} artwork={artwork}/>)}
        </ul>
      </div>
    );
  }
}

export default ArtworkIndex;
