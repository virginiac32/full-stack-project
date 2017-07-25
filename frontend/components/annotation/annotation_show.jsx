import React from 'react';
import {Link} from 'react-router-dom';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
  }

  componentWillMount(){
    this.props.fetchArtwork(this.props.artwork.id);
    console.log(this.props);

  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.annotationId !== nextProps.match.params.annotationId) {
  //     this.props.fetchAnnotation(nextProps.match.params.annotationId);
  //   }
  // }

  renderButtons(annotation, updateAnnotation, deleteAnnotation) {
    if (this.props.currentUser.id === annotation.user.id) {
      return (
        <div>
          <button onClick={updateAnnotation.bind(null,annotation)}>
            <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
          </button>
          <button onClick={deleteAnnotation.bind(null,annotation)}>
            <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }

  render () {
    const {artwork,deleteAnnotation,updateAnnotation} = this.props;
    let annotation = null;
    let annotations = this.props.artwork.annotations;
    if (this.props.artwork.annotations) {
      annotation = this.props.artwork.annotations[this.props.currentAnnotation];
    }
    if (!annotations) return null;

    return (
      <div className="annotation-body">
          {Object.values(annotations).map(anno =>
            <ul>
              <li>By: {anno.user.username}</li>
              <li>{anno.body}</li>
              <li>{anno.total_score}</li>
            {this.renderButtons(anno,updateAnnotation,deleteAnnotation)}
          </ul>
        )}
    </div>
    );
  }
}

export default AnnotationShow;
