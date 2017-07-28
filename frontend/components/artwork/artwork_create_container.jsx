import {connect} from 'react-redux';
import ArtworkCreate from './artwork_create';
import {createArtwork} from '../../actions/artwork_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  state: state,
  errors: state.errors.errors
});

const mapDispatchToProps = (dispatch) => ({
  createArtwork: (artwork) => dispatch(createArtwork(artwork)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(ArtworkCreate);
