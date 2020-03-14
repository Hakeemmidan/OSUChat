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
    if (this.displayConfirmation && this.props.updateUsernameConfirmation) {
      return (
        <ul>
          <li
            key="updateUsernameConfirmation"
            className="session__msg--confirmation"
          >
            {this.props.updateUsernameConfirmation}
          </li>
        </ul>
      );
    } else {
      return null;
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
    return (
      <div className="session__form-container">
        <div className="session__form-box">
          <form onSubmit={this.handleSubmit}>
            Reset username:
            <br />

            {this.renderConfirmation()}
            {this.renderErrors()}

            <br />

            <label className="session__input-container">
              <input type="text"
                value={this.state.newUsername}
                onChange={this.update('newUsername')}
                className="session__textbox"
              />
            </label>

            <br />

            <div className="session__btn--submit">
              <input type="submit" value="Reset username" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

ChangeUsernameFormModal.propTypes = {
  processForm: PropTypes.func.isRequired,
  errors: PropTypes.array,
  updateUsernameConfirmation: PropTypes.string
};