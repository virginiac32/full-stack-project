import {Link} from 'react-router-dom';
import React from 'react';
import merge from 'lodash/merge';

import AnnotationShowContainer from '../annotation/annotation_show_container';
import {AnnotationCreateFormContainer} from '../annotation/annotation_form_container';

class AnnotationPointers extends React.Component {

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
      currentAnno: {},
      windowResize:[]
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    // this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.handleAnnoClick = this.handleAnnoClick.bind(this);
    this.openAnnotationForm = this.openAnnotationForm.bind(this);
    this.openAnnotation = this.openAnnotation.bind(this);
    this.closeAnnotation = this.closeAnnotation.bind(this);
    this.annotationBoxStyle = this.annotationBoxStyle.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    // this code doesnt do anything, but annotation pointers don't initially show up without it
    setTimeout(this.setState({spinner: false}), 1000);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
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

  handleResize(e) {
    this.setState({
    windowResize: [window.innerHeight,window.innerWidth]
    });
  }

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

  openAnnotation(annoId) {
    if (this.state.annotationFormOpen === true) {
      this.setState({annotationFormOpen: false});
    }
    let currentAnno = this.props.annotations[annoId];
    let yPixelPos = ((currentAnno.y_pos)*($("#artwork-img").height()))/100;
    let style = this.annotationBoxStyle(currentAnno.x_pos, currentAnno.y_pos,yPixelPos);

    this.setState(
      {annotationOpen: true,
        annotationBoxStyle: style,
        currentAnno: currentAnno
    });
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

  // handleWrapperClick(e) {
  //   if (this.state.annotationFormOpen === true || this.state.annotationOpen === true) {
  //     this.closeAnnotation();
  //   }
  // }

  handleAnnoClick(annoId,e) {
    e.preventDefault();
    if (this.state.annotationOpen === true) {
      this.closeAnnotation();
    } else {
      this.openAnnotation(annoId);
    }
  }

  annotationBoxStyle(x_pos,y_pos,yPixelPos) {
    // styling position of annotation box
    let top = yPixelPos;
    // if y_pos is less than 15% from the top of the image, offset the position of the annotation box
    if (y_pos < 15) {
      top = yPixelPos + (($("#artwork-img").height())/6);
    }

    // if y_pos is less than 15% from the bottom of the image, offset the position of the annotation box
    if (y_pos > 85) {
      top = yPixelPos - (($("#artwork-img").height())/4);
    }

    let side = (x_pos < 50 ? 'left' : 'right');

    let style = {};
    if (side === 'left') {
      style = {
        position: 'absolute',
        top: top,
        left: '1%'
      };
    } else {
      style = {
        position: 'absolute',
        top: top,
        right: '1%'
      };
    }
    return style;
  }

  renderPointers() {
    if ($("#artwork-img").offset()) {
      let imageDimensions = [($("#artwork-img").width()),($("#artwork-img").height())];
      let artwork = this.props.artwork;
      let allAnnos = merge({},this.props.annotations);
      // returns the annotations with their absolute positions on the screen
      console.log("top offset", $("#artwork-img").offset().top);
      let annotationsWithPixelPos = Object.keys(allAnnos).map(anno => {
        let pixelAnno = allAnnos[anno];
        pixelAnno['x_pos'] = Math.floor(((pixelAnno['x_pos']*imageDimensions[0])/100))+$("#artwork-img").offset().left;
        pixelAnno['y_pos'] = Math.floor(pixelAnno['y_pos']*($("#artwork-img").height()/100))-$("#artwork-img").offset().top;
        // if (pixelAnno['y_pos'] < $("#artwork-img").offset().top) {
        //   pixelAnno['y_pos'] = $("#artwork-img").offset().top;
        // }
        // console.log("before offset", Math.floor(pixelAnno['y_pos']*($("#artwork-img").height()/100)));
        let style = {
          position: 'absolute',
          top: pixelAnno['y_pos']+'px',
          left: pixelAnno['x_pos']+'px'
        };
        return {pixelAnno: pixelAnno, style: style};
      });

      return (
        annotationsWithPixelPos.map(anno => (
          <button className="pointers" key={`anno-pointer-${anno.pixelAnno.id}`} onClick={this.handleAnnoClick.bind(null,anno.pixelAnno.id)} style={anno.style}>
            <i id="pointer" className="fa fa-dot-circle-o fa-lg" aria-hidden="true"></i>
          </button>
        )
      )
    );
    }
  }

  render () {
    let artwork = this.props.artwork;
      return (
        <div className="artwork-image" >
          {this.renderDelete(artwork,this.props.deleteArtwork)}
            <img id="artwork-img" src={artwork.link} alt={artwork.title} onClick={this.handleImageClick} />
              <div className="pointers">
                {this.renderPointers()}
              </div>
            {this.state.annotationFormOpen ? <AnnotationCreateFormContainer
              style={this.state.annotationBoxStyle} position={this.state.annotationPosition}
              user={this.state.user} artwork={this.state.artwork}
              closeAnnotation={this.closeAnnotation} /> : null}
            {this.state.annotationOpen ? <AnnotationShowContainer
              style={this.state.annotationBoxStyle} artwork={this.state.artwork}
              annotation={this.state.currentAnno} closeAnnotation={this.closeAnnotation} /> : null}
        </div>


      );
    }

}

export default AnnotationPointers;
