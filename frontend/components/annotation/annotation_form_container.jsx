import {connect} from 'react-redux';
import AnnotationForm from './annotation_form';
import {createAnnotation, updateAnnotation} from '../../actions/annotation_actions';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation))
});

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationForm);
