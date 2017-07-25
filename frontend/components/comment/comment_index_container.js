import CommentIndex from './comment_index';
import {connect} from 'react-redux';
import {fetchComments, fetchComment, createComment, updateComment, deleteComment}
  from '../../actions/comment_actions';
import {fetchArtwork} from '../../actions/artwork_actions';
import {createVote, deleteVote} from '../../actions/vote_actions';


const mapStateToProps = (state) => {
  return {
    // artwork: state.artworks.artworks[state.artworks.currentArtwork],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  // fetchArtwork: (artwork_id) => dispatch(fetchArtwork(artwork_id)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: artwork_id => dispatch(fetchComments(artwork_id)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  createVote: vote => dispatch(createVote(vote)),
  deleteVote: vote => dispatch(deleteVote(vote))
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);
