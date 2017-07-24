import CommentIndex from './comment_index';
import {connect} from 'react-redux';
import {selectArtworkComments} from '../../reducers/selectors';
import {fetchComments, fetchComment, createComment, updateComment, deleteComment}
  from '../../actions/comment_actions';

const mapStateToProps = (state,ownProps) => ({
  comments: selectArtworkComments(state.comments, ownProps.comments.artwork_id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (artwork_id) => dispatch(fetchComments(artwork_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComment: id => dispatch(fetchComment(id)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);
