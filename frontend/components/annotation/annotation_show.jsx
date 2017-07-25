import React from 'react';
import {Link} from 'react-router-dom';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
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

  render () {
    const {artwork,deleteAnnotation,updateAnnotation} = this.props;
    let annotation = null;
    let annotations = this.props.artwork.annotations;
    if (this.props.artwork.annotations) {
      annotation = this.props.artwork.annotations[this.props.currentAnnotation];
    }
    console.log("theanno",annotation);
    console.log("annos",Object.values(annotations));
    if (!annotations) return null;

    return (
      <div className="annotation-body">
          {Object.values(annotations).map(anno =>
            <ul>
              <li>By: {anno.user.username}</li>
              <li>{anno.body}</li>
              <li>{anno.total_score}</li>
            <button className="update-button" onClick={() => updateAnnotation(anno)}>Update</button>
            <button className="delete-button" onClick={() => deleteAnnotation(anno)}>Delete</button>
          </ul>
        )}
    </div>
    );
  }
}

export default AnnotationShow;
