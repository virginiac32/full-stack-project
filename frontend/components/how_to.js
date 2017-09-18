import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer/footer';

class ArtworkDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => this.setState({loading: false}), 1500);
  }

  render () {

      return (
        <div className="how-to">
          <div>
            <h1>Use Visualyze to view and annotate works of art</h1>
            <div className="how-to-section">
              <div className="how-to-description">
                <h2>Explore Artworks</h2>
                <h3>Scroll through artworks on the homepage and click on one for more details.</h3>
              </div>
              <img className="how-to-gif" src="http://res.cloudinary.com/dzqodddmb/image/upload/v1503694609/artwork/homepage.gif" alt="homepage" />
            </div>

            <div className="how-to-section">
              <div className="how-to-description">
                <h2>View and Create Annotations</h2>
                <h3>Hover over an artwork to view all its annotation pointers. Click on a pointer to see what users have annotated!</h3><br />
                <h3>To create your own annotations, click on the location on the artwork you want to annotate, then fill out the annotation form.</h3>
              </div>
              <img className="how-to-gif" src="http://res.cloudinary.com/dzqodddmb/image/upload/v1503696649/artwork/annotations.gif" alt="homepage" />
            </div>

            <div className="how-to-section">
              <div className="how-to-description">
                <h2>Comment and Vote</h2>
                <h3>You can comment on artworks, and upvote/downvote comments and annotations.</h3>
              </div>
              <img className="how-to-gif" src="http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,w_640/v1503700637/artwork/Comments.gif" alt="homepage" />
            </div>

            <div className="how-to-section">
              <div className="how-to-description">
                <h2>Upload Artwork</h2>
                <h3>Upload artworks to share with the Visualyze community. Anyone in community will then be able to annotate, comment, and vote on the artwork.</h3>
              </div>
              <img className="how-to-gif" src="http://res.cloudinary.com/dzqodddmb/image/upload/v1503701395/artwork/new-artwork.gif" alt="homepage" />
            </div>

          </div>
          <Footer type="light" />
        </div>
      );
    }
  }
// }

export default ArtworkDetail;
