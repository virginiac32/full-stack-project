import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ArtworksReducer from './artworks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  artworks: ArtworksReducer
});

export default RootReducer;
