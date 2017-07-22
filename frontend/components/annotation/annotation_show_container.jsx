import AnnotationShow from './annotation_show';
import {connect} from 'react-redux';
import {fetchAnnotation, createAnnotation, deleteAnnotation, updateAnnotation}
  from '../../actions/annotation_actions';

const mapStateToProps = ({annotations}) => ({
  annotation: annotations.annotations[annotations.currentAnnotation]
});

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  fetchAnnotation: id => dispatch(fetchAnnotation(id)),
  deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
  updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);
