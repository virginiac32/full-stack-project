import CommentIndex from './comment_index';
import {connect} from 'react-redux';
import {fetchComments, fetchComment, createComment, updateComment, deleteComment}
  from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {artwork: state.artworks.artworks[state.artworks.currentArtwork]};
};

const mapDispatchToProps = (dispatch) => ({
  // fetchComments: (artwork_id) => dispatch(fetchComments(artwork_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComment: id => dispatch(fetchComment(id)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);
