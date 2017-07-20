import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ArtworksReducer from './artworks_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  artworks: ArtworksReducer,
  errors: ErrorsReducer
});

export default RootReducer;
