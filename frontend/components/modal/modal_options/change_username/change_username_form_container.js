import React from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.user,
    signupConfirmation: state.ui.confirmation.updateUsernameConfirmation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (username) => dispatch(updateUsername(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)();