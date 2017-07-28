import CommentIndex from './comment_index';
import {connect} from 'react-redux';
import {fetchComments, fetchComment, createComment, deleteComment}
  from '../../actions/comment_actions';
import {fetchArtwork} from '../../actions/artwork_actions';
import {createVote, deleteVote} from '../../actions/vote_actions';
import {clearErrors} from '../../actions/error_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: artwork_id => dispatch(fetchComments(artwork_id)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  createVote: vote => dispatch(createVote(vote)),
  deleteVote: vote => dispatch(deleteVote(vote)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);
