import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, forgotPassword } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions'
import { SessionForm } from './SessionForm';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    signupConfirmation: state.ui.confirmation.signupConfirmation,
    formType: 'signup',
    navLink: <Link className="session__btn--nav" to="/login">log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    forgotPassword: (email) => dispatch(forgotPassword(email)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);