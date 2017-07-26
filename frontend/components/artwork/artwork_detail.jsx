import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
import AnnotationShowContainer from '../annotation/annotation_show_container';
import {AnnotationCreateFormContainer} from '../annotation/annotation_form_container';

class ArtworkDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: this.props.annotations,
      user: this.props.currentUser,
      artwork: this.props.artwork,
      annotationFormOpen: false,
      annotationOpen: false,
      annotationPosition:[],
      annotationPixelPos:[],
      annotationBoxPos:[],
      isMouseInside: false
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.openAnnotationForm = this.openAnnotationForm.bind(this);
    this.closeAnnotationForm = this.closeAnnotationForm.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.setAnnotationBoxPos = this.setAnnotationBoxPos.bind(this);

  }

  componentDidMount(){
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
        });
    }
  }

  // componentWillUnmount() {
  //    = null;
  // }

  openAnnotationForm(e) {
    let xPixelPos = Math.floor(e.pageX - $("#artwork-img").offset().left);
    let yPixelPos = Math.floor(e.pageY - $("#artwork-img").offset().top);
    this.setState({annotationPixelPos: [xPixelPos, yPixelPos]});
    console.log(xPixelPos);
    console.log($("#artwork-img").width());

    // save position values as percentage of image size
    this.x_pos = (xPixelPos/($("#artwork-img").width()))*100;
    this.y_pos = (yPixelPos/($("#artwork-img").height()))*100;

    this.setState(
      {annotationFormOpen: true,
        annotationPosition: [this.x_pos, this.y_pos]
    });
  }

  setAnnotationBoxPos(annotationPosition) {
    }

  closeAnnotationForm() {
    // more
    this.setState(
      {annotationFormOpen: false,
        annotationPosition: []
    });
  }

  handleImageClick(e) {
    if (this.state.annotationFormOpen === true) {
      this.closeAnnotationForm();
    } else {
      this.openAnnotationForm(e);
    }
  }

  handlePointerClick(e) {

  }

  handleMouseOver() {
    this.setState({ isMouseInside: true });
  }

  handleMouseOut() {
    this.setState({ isMouseInside: false });
  }

  render () {
    const {artwork,deleteArtwork} = this.props;
    if (!artwork) return null;

    // styling position of annotation box
    let top = this.state.annotationPixelPos[1];
    // if y_pos is less than 15% from the top of the image, offset the height of the annotation box
    if (this.y_pos < 15) {
      top = this.state.annotationPixelPos[1] + (($("#artwork-img").height())/6);
    }

    let side = (this.x_pos < 50 ? 'left' : 'right');

    let style = {};
    if (side === 'left') {
      style = {
        position: 'absolute',
        top: top,
        left: '0px'
      };
    } else {
      style = {
        position: 'absolute',
        top: top,
        right: '0px'
      };
    }

    // if (this.props.artwork === null) {
    //   return (
    //     <i className="fa fa-spinner fa-lg" aria-hidden="true"></i>
    //   );
    // } else {
      return (
        <div className="artwork-detail">
          <Link to="/">Back Home</Link>
          <div className="artwork-image">
              <img id="artwork-img" src={artwork.link} alt={artwork.title} onClick={this.handleImageClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>
              {this.state.annotationFormOpen ? <AnnotationCreateFormContainer style={style} position={this.state.annotationPosition} user={this.state.user} artwork={this.state.artwork} /> : null}
            </div>
          <button className="delete-button" onClick={() => deleteArtwork(artwork).then(() => this.props.history.push('/'))}>Delete</button>
          <div className="artwork-detail-bottom">
            <ul className="artwork-detailed-info">
              <li><h2><b>{artwork.title}</b></h2></li>
              <li>Artist: {artwork.artist}</li>
              <li>Date: {artwork.year}</li>
              <li>{artwork.description}</li>
            </ul>
            <div className="annotations">
              <span>Annotations</span>
              <AnnotationShowContainer annotations={this.props.annotations}/>
            </div>
            <div className="comments">
              <h2>RESPONSES</h2>
              <CommentFormContainer />
              <CommentIndexContainer comments={this.props.comments}/>
            </div>
          </div>
      </div>
      );
    }

}

export default ArtworkDetail;
