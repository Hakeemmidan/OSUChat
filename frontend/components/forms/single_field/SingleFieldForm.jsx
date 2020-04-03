import React from 'react';
import PropTypes from 'prop-types';

export class SingleFieldForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
        this.displayErrors = false;
        this.displayConfirmation = false;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderConfirmation = this.renderConfirmation.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.type === 'change-username') {
          this.props.processForm(this.props.currentUser.id, this.state.body);
        } else {
          this.props.processForm(this.state.body)
        }
        this.displayErrors = true;
        this.displayConfirmation = true;
    }

    renderConfirmation() {
      if (this.displayConfirmation && this.props.confirmation) {
            return (
                <ul>
                    <li key="SingleFormField-confirmation" className="session__msg--confirmation">
                        {this.props.confirmation}
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
                <ul className="u-no-padding">
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
                        {this.props.instructions}

                        <br/>

                        {this.renderConfirmation()}
                        {this.renderErrors()}

                        <br/>

                        <label className="session__input-container">
                            {this.props.fieldLabel}
                            <br />
                            <input type="text"
                                value={this.state.body}
                                onChange={this.update('body')}
                                className="session__textbox"
                            />
                        </label>

                        <br/>

                        <div className="session__btn--submit" onClick={this.handleSubmit}>
                            <input type="submit" value={this.props.submitButtonText} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
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