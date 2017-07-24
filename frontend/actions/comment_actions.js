import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const DESTROY_COMMENT = 'DESTROY_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// synchronous action creators
export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

// export const receiveComments = comments => ({
//   type: RECEIVE_COMMENTS,
//   comments
// });

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const destroyComment = comment => ({
  type: DESTROY_COMMENT,
  comment
});

// async thunk action creators
export const fetchComment = (id) => dispatch => {
  return CommentAPIUtil.fetchComment(id).then(
    comment2 => dispatch(receiveComment(comment2))
  );
};

// export const fetchComments = () => dispatch => {
//   return CommentAPIUtil.fetchComments().then(
//     comments => dispatch(receiveComments(comments))
//   );
// };

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.createComment(comment).then(
    comment2 => dispatch(receiveComment(comment2)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateComment = (comment) => dispatch => {
  return CommentAPIUtil.updateComment(comment).then(
    comment2 => dispatch(receiveComment(comment2)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteComment = (comment) => dispatch => {
  return CommentAPIUtil.deleteComment(comment).then(
    comment2 => dispatch(destroyComment(comment2))
  );
};
