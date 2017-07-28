import AnnotationShow from './annotation_show';
import {connect} from 'react-redux';
import {receiveAnnotation, fetchAnnotation, fetchAnnotations, createAnnotation, deleteAnnotation, updateAnnotation}
  from '../../actions/annotation_actions';
import {createVote, deleteVote, receiveAnnotationVote} from '../../actions/vote_actions';

const mapStateToProps = (state,ownProps) => {
  return {
  currentUser: state.session.currentUser,
  annotation: state.annotations.annotations[ownProps.annotationId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  fetchAnnotation: id => dispatch(fetchAnnotation(id)),
  receiveAnnotation: annotation => dispatch(receiveAnnotation(annotation)),
  deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
  updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
  createVote: vote => dispatch(createVote(vote)),
  deleteVote: vote => dispatch(deleteVote(vote)),
  receiveAnnotationVote: vote => dispatch(receiveAnnotationVote(vote))
});

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);
