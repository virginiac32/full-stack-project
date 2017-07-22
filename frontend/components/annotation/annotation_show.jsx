import React from 'react';
import {Link} from 'react-router-dom';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchAnnotation(this.props.match.params.annotationId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.annotationId !== nextProps.match.params.annotationId) {
      this.props.fetchAnnotation(nextProps.match.params.annotationId);
    }
  }

  render () {
    const {annotation,deleteAnnotation,updateAnnotation} = this.props;
    if (!annotation) return null;

    return (
      <div className="annotation-body">
        <ul>
          <li>User_id (how to get username?): {annotation.user_id}</li>
          <li>{annotation.body}</li>
          <li>{annotation.total_score}</li>
        </ul>
        <button className="update-button" onClick={() => updateAnnotation(annotation).then(() => this.props.history.push('/annotations/${annotation.id}'))}>Update</button>
        <button className="delete-button" onClick={() => deleteAnnotation(annotation).then(() => this.props.history.push('/artworks/${annotation.artwork_id}'))}>Delete</button>
      </div>
    );
  }
}

export default AnnotationShow;
