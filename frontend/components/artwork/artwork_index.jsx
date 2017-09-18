import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import Footer from '../footer/footer';

class ArtworkIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    setTimeout(() => this.setState({loading: false}), 1500);
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

    if (this.state.loading === true) {
      return (
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      );
    } else {
      return (
        <div className="index-full-container">
          <div className="index-container">
            <Slider {...settings}>
              {ArtworkIndexItems}
            </Slider>
          </div>
          <Footer type="dark" />
        </div>
      );
    }
  }
}

export default ArtworkIndex;
