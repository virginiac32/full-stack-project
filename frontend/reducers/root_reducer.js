import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ArtworksReducer from './artworks_reducer';
import AnnotationsReducer from './annotations_reducer';
import ErrorsReducer from './errors_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  artworks: ArtworksReducer,
  annotations: AnnotationsReducer,
  errors: ErrorsReducer,
  comments: CommentsReducer
});

export default RootReducer;
