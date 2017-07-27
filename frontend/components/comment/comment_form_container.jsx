import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {createComment, updateComment, fetchComment} from '../../actions/comment_actions';
import {fetchArtwork} from '../../actions/artwork_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state, {location}) => {
  // console.log(state);
  // console.log(location.pathname);
  return {state: state};
  // location: location.pathname};
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  fetchComment: id => dispatch(fetchComment(id)),
  fetchArtwork: artwork_id => dispatch(fetchArtwork(artwork_id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);
