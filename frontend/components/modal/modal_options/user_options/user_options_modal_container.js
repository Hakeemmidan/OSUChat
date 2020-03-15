import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../../actions/modal_actions';
import { UserOptionsModal } from './user_options_modal';

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(UserOptionsModal);