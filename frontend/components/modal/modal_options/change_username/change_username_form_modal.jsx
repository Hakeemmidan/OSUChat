import React from 'react'
import PropTypes from 'prop-types';

export class ChangeUsernameFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: ""
    };
    this.displayErrors = false;
    this.displayConfirmation = false;
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state.newUsername);
    this.displayErrors = true;
    this.displayConfirmation = true;
  }

  renderConfirmation() {
    if (this.displayConfirmation && this.props.signupConfirmation) {
      return (
        <ul>
          <li key="forgotPasswordConfirmation" className="session__msg--confirmation">
            {this.props.forgotPasswordConfirmation}
          </li>
        </ul>
      )
    } else {
      return null
    }
  }

  renderErrors() {
    if (this.displayErrors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="session__msg--error">
              {error}
            </li>
          ))}
        </ul>
      )
    } else {
      return null
    }
  }

  render() {

  }
}

ChangeUsernameFormModal.propTypes = {
  processForm: PropTypes.func.isRequired,
  errors: PropTypes.array,
  signupConfirmation: PropTypes.string
};