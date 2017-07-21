import React from 'react';
import {Link, Route} from 'react-router-dom';

class ArtworkIndexItem extends React.Component {
  render () {
    const {artwork} = this.props;
    return (
      <li className="artwork-index-item">
        <Link to={`/artworks/${artwork.id}`} className="link-to-artwork">
          <span>{artwork.title}</span>
          <img height="450" src={artwork.link} alt={artwork.title} />
        </Link>
      </li>
    );
  }
}

export default ArtworkIndexItem;
