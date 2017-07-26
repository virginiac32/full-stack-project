import * as AnnotationAPIUtil from '../util/annotation_api_util';
import {receiveArtwork} from './artwork_actions';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';
export const DESTROY_ANNOTATION = 'DESTROY_ANNOTATION';

// synchronous action creators
export const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const receiveAnnotations = annotations => ({
  type: RECEIVE_ANNOTATIONS,
  annotations
});

export const destroyAnnotation = annotation => ({
  type: DESTROY_ANNOTATION,
  annotation
});

// async thunk action creators
export const fetchAnnotation = (id) => dispatch => {
  return AnnotationAPIUtil.fetchAnnotation(id).then(
    annotation2 => dispatch(receiveAnnotation(annotation2))
  );
};

export const fetchAnnotations = (artwork_id) => dispatch => {
  return AnnotationAPIUtil.fetchAnnotations(artwork_id).then(
    annotations => dispatch(receiveAnnotations(annotations))
  );
};

export const createAnnotation = (annotation) => dispatch => {
  return AnnotationAPIUtil.createAnnotation(annotation).then(
    (annotation2) => dispatch(receiveArtwork(annotation2)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateAnnotation = (annotation) => dispatch => {
  return AnnotationAPIUtil.updateAnnotation(annotation).then(
    (annotation2) => dispatch(receiveArtwork(annotation2)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteAnnotation = (annotation) => dispatch => {
  return AnnotationAPIUtil.deleteAnnotation(annotation).then(
    annotation2 => dispatch(destroyAnnotation(annotation2))
  );
};
