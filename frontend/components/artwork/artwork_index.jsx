import React from 'react';
import {Link} from 'react-router-dom';
// import ArtworkIndexItem from './artwork_index_item';
import Slider from 'react-slick';

class ArtworkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchArtworks();
  }

  render () {
    const {artworks, deleteArtwork} = this.props;
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
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

// <div className="artwork-index">

// <ul className="artwork-list">
//   <Slider {...settings}>
//     {artworks.map(artwork => <ArtworkIndexItem key={artwork.id} artwork={artwork}/>)}
//   </Slider>
// </ul>

// </div>


export default ArtworkIndex;
