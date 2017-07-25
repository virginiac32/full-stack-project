import AnnotationShow from './annotation_show';
import {connect} from 'react-redux';
import {fetchAnnotation, fetchAnnotations, createAnnotation, deleteAnnotation, updateAnnotation}
  from '../../actions/annotation_actions';
import {fetchArtwork} from '../../actions/artwork_actions';

const mapStateToProps = (state) => {
  console.log("thestate",state);
  return {
  artwork: state.artworks.artworks[state.artworks.currentArtwork],
  currentUser: state.session.currentUser,
  currentAnnotation: state.annotations.currentAnnotation
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArtwork: (artwork_id) => dispatch(fetchArtwork(artwork_id)),
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  fetchAnnotation: id => dispatch(fetchAnnotation(id)),
  // fetchAnnotations: id => dispatch(fetchAnnotation(id)),
  deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
  updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);
