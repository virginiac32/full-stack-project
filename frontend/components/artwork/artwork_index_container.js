import ArtworkIndex from './artwork_index';
import {connect} from 'react-redux';
import {selectAllArtworks} from '../../reducers/selectors';
import {fetchArtworks, fetchArtwork, createArtwork, deleteArtwork}
  from '../../actions/artwork_actions';

const mapStateToProps = (state) => ({
  artworks: selectAllArtworks(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtworks: () => dispatch(fetchArtworks()),
  createArtwork: (artwork) => dispatch(createArtwork(artwork)),
  fetchArtwork: id => dispatch(fetchArtwork(id)),
  deleteArtwork: (id) => dispatch(deleteArtwork(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ArtworkIndex);
