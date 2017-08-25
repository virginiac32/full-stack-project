import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
import AnnotationPointersContainer from '../annotation/annotation_pointers_container';
import FooterLight from '../footer/footer_light';

class ArtworkDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: this.props.annotations,
      user: this.props.currentUser,
      artwork: this.props.artwork,
      loading: true
    };

    this.renderDelete = this.renderDelete.bind(this);
  }

  componentDidMount(){
    setTimeout(() => this.setState({loading: false}), 1500);
    this.props.fetchArtwork(this.props.match.params.artworkId)
    .then(
      () => {
        this.props.fetchComments(this.props.artwork.id);
        this.props.fetchAnnotations(this.props.artwork.id);
        // document.getElementsByClassName("pointers").setAttribute('display','block');
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

  renderDelete(artwork, deleteArtwork) {
    if (this.props.currentUser && (this.props.currentUser.id === artwork.user_id)) {
      return (
        <button className="delete-button" onClick={() => deleteArtwork(artwork).then(() => this.props.history.push('/'))}>
          <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
        </button>
      );
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    const {artwork,deleteArtwork, annotations,comments} = this.props;
    if (!artwork) return null;

    // setTimeout(this.setState({spinner: false}), 5000);

    if (this.state.loading === true) {
      return (
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      );
    } else {

      return (
        <div className="artwork-detail">
          <AnnotationPointersContainer history={this.props.history}/>
            <div className="artwork-detail-bottom">
              <ul className="artwork-detailed-info">
                <li><h1><b>{artwork.title}</b></h1>
                {this.renderDelete(artwork,this.props.deleteArtwork)}
                </li>
                <li>Artist: {artwork.artist}</li>
                <li>Date: {artwork.year}</li>
                <li className="art-description">{artwork.description}</li>
                {this.renderErrors()}
              </ul>
              <div className="comments">
                <CommentFormContainer />
                <CommentIndexContainer comments={comments}/>
              </div>
            </div>
          <FooterLight />
        </div>
      );
    }
  }
}

export default ArtworkDetail;
