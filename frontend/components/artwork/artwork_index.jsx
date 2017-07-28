import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import FooterDark from '../footer/footer_dark';

class ArtworkIndex extends React.Component {

  componentDidMount(){
    this.props.fetchArtworks();
  }

  render () {
    const {artworks, deleteArtwork} = this.props;
    let settings = {
      accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      adaptiveHeight: true
    };

    let ArtworkIndexItems = [];
    if (artworks.length > 0){
      {ArtworkIndexItems = artworks.map(artwork => (
        <div key={`artwork-key-${artwork.id}`}>
          <Link to={`/artworks/${artwork.id}`} className="link-to-artwork">
            <img className="slick-image" src={artwork.link} />
          </Link>
        </div>));}
    } else {
      ArtworkIndexItems.push(<div key="no-artwork"></div>);
    }

    return (
      <div className="index-full-container">
        <div className="index-container">
          <Slider {...settings}>
            {ArtworkIndexItems}
          </Slider>
        </div>
        <FooterDark />
      </div>
    );
  }
}

export default ArtworkIndex;
