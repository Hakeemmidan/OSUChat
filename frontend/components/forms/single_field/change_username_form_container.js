import { connect } from 'react-redux';
import { updateUsername } from '../../../actions/user_actions';
import { SingleFieldForm } from './SingleFieldForm';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.user,
    confirmation: state.ui.confirmation.updateUsernameConfirmation,
    type: "change-username", // if you change this, change handleSubmit() conditional in SingleFieldForm
    instructions: "Change username:",
    fieldLabel: "new username",
    submitButtonText: "Reset username"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (id, username) => dispatch(updateUsername(id, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFieldForm);