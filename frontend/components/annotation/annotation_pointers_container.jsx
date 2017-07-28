import {connect} from 'react-redux';
import AnnotationPointers from './annotation_pointers';
import {fetchAnnotation} from '../../actions/annotation_actions';
import {deleteArtwork} from '../../actions/artwork_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
  artwork: state.artworks.artworks[state.artworks.currentArtwork],
  currentUser: state.session.currentUser,
  annotations: state.annotations.annotations,
  history: state.history,
  errors: state.errors.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteArtwork: (id) => dispatch(deleteArtwork(id)),
  fetchAnnotation: id => dispatch(fetchAnnotation(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationPointers);
