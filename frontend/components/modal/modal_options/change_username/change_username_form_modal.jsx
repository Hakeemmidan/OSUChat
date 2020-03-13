import React from 'react'
import PropTypes from 'prop-types';

export class ChangeUsernameFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: ""
    };
  }
  
  handleSubmit() {
    this.props.processForm(this.state.newUsername)
  }


  render() {

  }
}

ChangeUsernameFormModal.propTypes = {
  processForm: PropTypes.func.isRequired,
  errors: PropTypes.array,
  signupConfirmation: PropTypes.string
};