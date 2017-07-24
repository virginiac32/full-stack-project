import CommentIndex from './comment_index';
import {connect} from 'react-redux';
// import {selectAllComments} from '../../reducers/selectors';
import {fetchComments, fetchComment, createComment}
  from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  state: state
  // comments: selectAllComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments()),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComment: id => dispatch(fetchComment(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);
