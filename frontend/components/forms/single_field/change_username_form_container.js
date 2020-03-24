import { connect } from 'react-redux';
import { updateUsername } from '../../../actions/user_actions';
import { SingleFieldForm } from './SingleFieldForm';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.user,
    confirmation: state.ui.confirmation.updateUsernameConfirmation,
    instructions: "Change username:",
    fieldLabel: "new username",
    submitButtonText: "Reset username"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (username) => dispatch(updateUsername(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFieldForm);