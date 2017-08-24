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
    this.handleAnnoClick = this.handleAnnoClick.bind(this);
    this.openAnnotationForm = this.openAnnotationForm.bind(this);
    this.openAnnotation = this.openAnnotation.bind(this);
    this.closeAnnotation = this.closeAnnotation.bind(this);
    this.annotationBoxStyle = this.annotationBoxStyle.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    // annotation pointers don't initially show up without this snippet
    setTimeout(this.setState({spinner: false}), 1000);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
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

  openAnnotation(annoId,anno) {
    if (this.state.annotationFormOpen === true) {
      this.setState({annotationFormOpen: false});
    }
    let currentAnno;
    if (!anno) {
      currentAnno = this.props.annotations[annoId];
    } else {
      currentAnno = anno;
    }
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

  handleAnnoClick(annoId,e) {
    e.preventDefault();
    if (this.state.annotationOpen === true) {
      this.closeAnnotation();
      if (annoId !== this.state.currentAnno.id) {
        this.openAnnotation(annoId);
      }
    } else {
      this.openAnnotation(annoId);
    }
  }

  annotationBoxStyle(x_pos,y_pos,yPixelPos) {
    // styling position of annotation box
    let top = yPixelPos;

    let yOffset = Math.floor($("#artwork-img").offset().left) + $("#artwork-img").width() + 10;


    // change ySide to 'bottom' if the top of the annotation box is in the lower 1/2 of the artwork
    let ySide = 'top';
    if (top > ($("#artwork-img").offset().top) + ($("#artwork-img").height())/2) {
      ySide = 'bottom';
    }

    let side = (x_pos < 50 ? 'left' : 'right');

    let style = {};
    if (side === 'left' && ySide === 'top') {
      style = {
        position: 'absolute',
        top: top,
        right: yOffset,
      };
    } else if (side === 'right' && ySide === 'top') {
      style = {
        position: 'absolute',
        top: top,
        left: yOffset,
      };
    } else if (side === 'right' && ySide === 'bottom') {
      style = {
        position: 'absolute',
        bottom: 10,
        left: yOffset,
      };
    } else {
      style = {
        position: 'absolute',
        bottom: 10,
        right: yOffset,
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

      let annotationsWithPixelPos = Object.keys(allAnnos).map(anno => {
        let pixelAnno = allAnnos[anno];
        pixelAnno['x_pos'] = Math.floor(((pixelAnno['x_pos']*imageDimensions[0])/100))+$("#artwork-img").offset().left;
        pixelAnno['y_pos'] = Math.floor(pixelAnno['y_pos']*($("#artwork-img").height()/100))-($("#artwork-img").offset().top);

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
            <img id="artwork-img" src={artwork.link} alt={artwork.title} onClick={this.handleImageClick} />
              <div className="pointers">
                {this.renderPointers()}
              </div>
            {this.state.annotationFormOpen ? <AnnotationCreateFormContainer
              style={this.state.annotationBoxStyle} position={this.state.annotationPosition}
              user={this.state.user} artwork={this.state.artwork}
              closeAnnotation={this.closeAnnotation} openAnnotation={this.openAnnotation} /> : null}
            {this.state.annotationOpen ? <AnnotationShowContainer
              style={this.state.annotationBoxStyle} artwork={this.state.artwork}
              annotationId={this.state.currentAnno.id} closeAnnotation={this.closeAnnotation} /> : null}
        </div>


      );
    }

}

export default AnnotationPointers;
