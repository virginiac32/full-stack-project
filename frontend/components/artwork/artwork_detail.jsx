import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
// import AnnotationShowContainer from '../annotation/annotation_show_container';
import AnnotationPointers from '../annotation/annotation_pointers';
// import {AnnotationCreateFormContainer} from '../annotation/annotation_form_container';
import {DotLoader} from 'react-spinners';

class ArtworkDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: this.props.annotations,
      user: this.props.currentUser,
      artwork: this.props.artwork,
      loading: true
    };

  }

  componentDidMount(){
    setTimeout(() => this.setState({loading: false}), 1000);
    this.props.fetchArtwork(this.props.match.params.artworkId)
    .then(
      () => {
        this.props.fetchComments(this.props.artwork.id);
        this.props.fetchAnnotations(this.props.artwork.id);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artworkId !== nextProps.match.params.artworkId) {
      this.props.fetchArtwork(nextProps.match.params.artworkId)
        .then(
          () => {
            this.props.fetchComments(nextProps.match.params.artworkId);
            this.props.fetchAnnotations(nextProps.match.params.artworkId);
            this.props.clearErrors();
        });
    }
  }

  componentWillUnmount() {
     this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // renderDelete(artwork, deleteArtwork) {
  //   if (this.props.currentUser && (this.props.currentUser.id === artwork.user.id)) {
  //     return (
  //       <button className="delete-button" onClick={() => deleteArtwork(artwork).then(() => this.props.history.push('/'))}>
  //         <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
  //       </button>
  //     );
  //   }
  // }

  render () {
    const {artwork,deleteArtwork, annotations,comments} = this.props;
    if (!artwork) return null;

    // setTimeout(this.setState({spinner: false}), 5000);

    if (this.state.loading === true) {
      return (
        <div className='sweet-loading'>
                <DotLoader
                  color={'#123abc'}
                  loading={this.state.loading}
                />
        </div>
      );
    } else {

    return (
      <div className="artwork-detail">
        <AnnotationPointers annotations={annotations} artwork={artwork} deleteArtwork={deleteArtwork}/>

          <div className="artwork-detail-bottom">
          <ul className="artwork-detailed-info">
            <li><h1><b>{artwork.title}</b></h1></li>
            <li>Artist: {artwork.artist}</li>
            <li>Date: {artwork.year}</li>
            <li>{artwork.description}</li>
            {this.renderErrors()}
          </ul>
          <div className="comments">
            <CommentFormContainer />
            <CommentIndexContainer comments={comments}/>
          </div>
        </div>
    </div>
    );
  }
}
}

export default ArtworkDetail;
