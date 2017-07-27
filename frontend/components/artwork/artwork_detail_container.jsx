import ArtworkDetail from './artwork_detail';
import {connect} from 'react-redux';
import {selectArtwork} from '../../reducers/selectors';
import {fetchArtwork, createArtwork, deleteArtwork}
  from '../../actions/artwork_actions';
import {fetchComments} from '../../actions/comment_actions';
import {fetchAnnotations} from '../../actions/annotation_actions';
import {selectAllArtworks} from '../../reducers/selectors';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    artwork: state.artworks.artworks[state.artworks.currentArtwork],
    annotations: state.annotations.annotations,
    comments: state.comments.comments,
    currentUser: state.session.currentUser,
    errors: state.errors.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  createArtwork: (artwork) => dispatch(createArtwork(artwork)),
  fetchArtwork: id => dispatch(fetchArtwork(id)),
  deleteArtwork: (id) => dispatch(deleteArtwork(id)),
  fetchAnnotations: artwork_id => dispatch(fetchAnnotations(artwork_id)),
  fetchComments: artwork_id => dispatch(fetchComments(artwork_id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(ArtworkDetail);
