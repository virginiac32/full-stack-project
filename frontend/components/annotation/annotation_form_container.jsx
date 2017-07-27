import {connect} from 'react-redux';
import AnnotationUpdateForm from './annotation_update_form';
import AnnotationCreateForm from './annotation_create_form';
import {createAnnotation, updateAnnotation, fetchAnnotation} from '../../actions/annotation_actions';

const mapStateToProps = (state) => {
  return {currentUser : state.session.currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
  fetchAnnotation: id => dispatch(fetchAnnotation(id))
});

export const AnnotationUpdateFormContainer = connect(mapStateToProps,mapDispatchToProps)(AnnotationUpdateForm);
export const AnnotationCreateFormContainer = connect(mapStateToProps,mapDispatchToProps)(AnnotationCreateForm);
