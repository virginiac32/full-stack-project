import {connect} from 'react-redux';
import ArtworkCreate from './artwork_create';
import {createArtwork} from '../../actions/artwork_actions';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  createArtwork: (artwork) => dispatch(createArtwork(artwork))
});

export default connect(mapStateToProps,mapDispatchToProps)(ArtworkCreate);
