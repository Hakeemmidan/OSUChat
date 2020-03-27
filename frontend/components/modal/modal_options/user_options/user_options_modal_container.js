import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actions';
import { UserOptionsModal } from './user_options_modal';

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(UserOptionsModal);