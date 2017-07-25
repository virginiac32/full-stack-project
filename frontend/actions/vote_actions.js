import * as VoteAPIUtil from '../util/vote_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_ANNOTATION_VOTE = 'RECEIVE_ANNOTATION_VOTE';
export const DESTROY_ANNOTATION_VOTE = 'DESTROY_ANNOTATION_VOTE';
export const RECEIVE_COMMENT_VOTE = 'RECEIVE_COMMENT_VOTE';
export const DESTROY_COMMENT_VOTE = 'DESTROY_COMMENT_VOTE';

export const receiveAnnotationVote = vote => ({
  type: RECEIVE_ANNOTATION_VOTE,
  vote
});

export const destroyAnnotationVote = vote => ({
  type: DESTROY_ANNOTATION_VOTE,
  vote
});

export const receiveCommentVote = vote => ({
  type: RECEIVE_COMMENT_VOTE,
  vote
});

export const destroyCommentVote = vote => ({
  type: DESTROY_COMMENT_VOTE,
  vote
});

export const createVote = (vote) => dispatch => {
  return VoteAPIUtil.createVote(vote).then(
    (vote2) => {
      if (vote.votable_type === 'Annotation') {
        dispatch(receiveAnnotationVote(vote2));
      } else {
        dispatch(receiveCommentVote(vote2));
      }
    }),
    errors => dispatch(receiveErrors(errors.responseJSON));
};

export const deleteVote = (vote) => dispatch => {
  return VoteAPIUtil.deleteVote(vote).then(
    (vote2) => {
      if (vote.votable_type === 'Annotation') {
        dispatch(destroyAnnotationVote(vote2));
      } else {
        dispatch(destroyCommentVote(vote2));
      }
    });
};
