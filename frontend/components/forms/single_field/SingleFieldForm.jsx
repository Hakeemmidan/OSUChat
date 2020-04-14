import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SingleFieldForm = (props) => {
  const [body, useBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (props.type === 'change-username') {
      props.processForm(props.currentUser.id, body);
    } else if (props.type === 'forgot-password') {
      props.processForm(body)
    }
  }

  const renderConfirmation = () => (
    props.confirmation ?
      <ul>
        <li key="SingleFormField-confirmation" className="session__msg--confirmation">
          {props.confirmation}
        </li>
      </ul>
    : null
  )

  const renderErrors = () => (
    props.errors.length > 0 ?
      <ul className="u-no-padding">
        {props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session__msg--error">
            {error}
          </li>
        ))}
      </ul>
    : null
  )

  return (
    <div className="session__form-container">
      <div className="session__form-box">
        <form onSubmit={handleSubmit}>
          {props.instructions}

          <br />

          {renderConfirmation()}
          {renderErrors()}

          <br />

          <label className="session__input-container">
            {props.fieldLabel}
            <br />
            <input type="text"
              value={body}
              onChange={e => useBody(e.currentTarget.value)}
              className="session__textbox"
            />
          </label>

          <br />

          <div className="session__btn--submit" onClick={handleSubmit}>
            <input type="submit" value={props.submitButtonText} />
          </div>
        </form>
      </div>
    </div>
  )
}

SingleFieldForm.propTypes = {
  processForm: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.array,
  confirmation: PropTypes.string,
  instructions: PropTypes.string,
  fieldLabel: PropTypes.string,
  submitButtonText: PropTypes.string
};