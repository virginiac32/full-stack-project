import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
import AnnotationShowContainer from '../annotation/annotation_show_container';
import AnnotationPointers from '../annotation/annotation_pointers';
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
      annotationBoxStyle:{},
      isMouseInside: false,
      currentAnno: {}
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleAnnoClick = this.handleAnnoClick.bind(this);
    this.openAnnotationForm = this.openAnnotationForm.bind(this);
    this.openAnnotation = this.openAnnotation.bind(this);
    this.closeAnnotation = this.closeAnnotation.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.annotationBoxStyle = this.annotationBoxStyle.bind(this);

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

    // save position values as percentage of image size
    this.x_pos = (xPixelPos/($("#artwork-img").width()))*100;
    this.y_pos = (yPixelPos/($("#artwork-img").height()))*100;

    let style = this.annotationBoxStyle(this.x_pos, this.y_pos,yPixelPos);

    this.setState(
      {annotationFormOpen: true,
        annotationPosition: [this.x_pos, this.y_pos],
        annotationBoxStyle: style
    });
  }

  openAnnotation(e) {
    // let currentAnno = this.props.annotations[this.props.annotations.currentAnnotation];
    let currentAnno = this.props.annotations[12];
    console.log("props",this.props);
    console.log(currentAnno);
    let yPixelPos = ((currentAnno.y_pos)*($("#artwork-img").height()))/100;
    let style = this.annotationBoxStyle(currentAnno.x_pos, currentAnno.y_pos,yPixelPos);

    this.setState(
      {annotationOpen: true,
        annotationBoxStyle: style,
        currentAnno: currentAnno
    });
    console.log(this.state);
  }

  // closes the form or the annotation
  closeAnnotation() {
    this.setState(
      {annotationFormOpen: false,
        annotationOpen: false,
        annotationPosition: [],
        currentAnno: {}
    });
  }

  handleImageClick(e) {
    if (this.state.annotationFormOpen === true || this.state.annotationOpen === true) {
      this.closeAnnotation();
    } else {
      this.openAnnotationForm(e);
    }
  }

  handleAnnoClick(e) {
    e.preventDefault();
    if (this.state.annotationOpen === true) {
      this.closeAnnotation();
    } else {
      this.openAnnotation(e);
    }
  }

  handleMouseOver() {
    this.setState({ isMouseInside: true });
  }

  handleMouseOut() {
    this.setState({ isMouseInside: false });
  }

  annotationBoxStyle(x_pos,y_pos,yPixelPos) {
    // styling position of annotation box
    let top = yPixelPos;
    // if y_pos is less than 15% from the top of the image, offset the height of the annotation box
    if (y_pos < 15) {
      top = yPixelPos + (($("#artwork-img").height())/6);
    }

    let side = (x_pos < 50 ? 'left' : 'right');

    let style = {};
    if (side === 'left') {
      style = {
        position: 'absolute',
        top: top,
        left: '2%'
      };
    } else {
      style = {
        position: 'absolute',
        top: top,
        right: '2%'
      };
    }
    return style;
  }

  render () {
    const {artwork,deleteArtwork} = this.props;
    if (!artwork) return null;

    // if (this.props.artwork === null) {
    //   return (
    //     <i className="fa fa-spinner fa-lg" aria-hidden="true"></i>
    //   );
    // } else {

    let imageDimensions = [($("#artwork-img").width()),($("#artwork-img").height())];

      return (
        <div className="artwork-detail">
          <Link to="/">Back Home</Link>
            <div className="artwork-image">
              <img id="artwork-img" src={artwork.link} alt={artwork.title} onClick={this.handleImageClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>
              {this.state.isMouseInside ? <AnnotationPointers handleAnnoClick={this.handleAnnoClick} annotations={this.props.annotations} imageDimensions={imageDimensions}/> : null}
              {this.state.annotationFormOpen ? <AnnotationCreateFormContainer style={this.state.annotationBoxStyle} position={this.state.annotationPosition} user={this.state.user} artwork={this.state.artwork} /> : null}
              {this.state.annotationOpen ? <AnnotationShowContainer style={this.state.annotationBoxStyle} user={this.state.user} artwork={this.state.artwork} annotation={this.state.currentAnno} /> : null}
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
