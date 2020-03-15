import { connect } from 'react-redux';
import { updateUsername } from '../../../../actions/user_actions';
import { ChangeUsernameFormModal } from './ChangeUsernameFormModal';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.user,
    updateUsernameConfirmation: state.ui.confirmation.updateUsernameConfirmation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (username) => dispatch(updateUsername(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUsernameFormModal);