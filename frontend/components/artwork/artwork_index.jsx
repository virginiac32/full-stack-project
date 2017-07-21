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
      slidesToScroll: 1
    };

    let ArtworkIndexItems = [];
    if (artworks.length > 0){
      {ArtworkIndexItems = artworks.map(artwork => { return <div key={artwork.id}><img src={artwork.link} /></div>;});}
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
