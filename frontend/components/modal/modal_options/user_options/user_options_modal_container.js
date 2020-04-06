import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../../actions/modal_actions';
import { logout } from '../../../../actions/session_actions';
import { UserOptionsModal } from './user_options_modal';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modalName) => dispatch(openModal(modalName)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOptionsModal);