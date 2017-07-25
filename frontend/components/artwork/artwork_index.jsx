import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

class ArtworkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchArtworks();
    console.log('artwork mounted props',this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.artworkId !== nextProps.match.params.artworkId) {
  //     console.log('artworkprops',nextProps.match.params.artworkId);
  //     this.props.fetchArtworks();
  //   }
  // }

  render () {
    const {artworks, deleteArtwork} = this.props;
    let settings = {
      accessibility: true,
      dots: true,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      // centerMode: true,
      adaptiveHeight: true
    };

    let ArtworkIndexItems = [];
    if (artworks.length > 0){
      {ArtworkIndexItems = artworks.map(artwork => (
        <div key={artwork.id}>
          <Link to={`/artworks/${artwork.id}`} className="link-to-artwork">
            <img className="slick-image" src={artwork.link} />
          </Link>
        </div>));}
    } else {
      ArtworkIndexItems.push(<div></div>);
    }

    return (
      <Slider {...settings}>
        {ArtworkIndexItems}
      </Slider>
    );
  }
}

export default ArtworkIndex;
