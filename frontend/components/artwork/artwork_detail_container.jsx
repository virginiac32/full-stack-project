import ArtworkDetail from './artwork_detail';
import {connect} from 'react-redux';
import {selectArtwork} from '../../reducers/selectors';
import {fetchArtwork, createArtwork, deleteArtwork}
  from '../../actions/artwork_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {artwork: state.artworks.artworks[state.artworks.currentArtwork]};
};

const mapDispatchToProps = (dispatch) => ({
  createArtwork: (artwork) => dispatch(createArtwork(artwork)),
  fetchArtwork: id => dispatch(fetchArtwork(id)),
  deleteArtwork: (id) => dispatch(deleteArtwork(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ArtworkDetail);
