import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return  {
            loggedIn: Boolean(state.session.currentUser),
            errors: state.errors.errors
          };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    guestLogin: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
