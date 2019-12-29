import React from 'react';

export class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.displayErrors = false;
        this.displayforgotPasswordConfirmation = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderforgotPasswordConfirmation = this.renderforgotPasswordConfirmation.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.forgotPassword(this.state.email);
        this.displayErrors = true;
        this.displayforgotPasswordConfirmation = true;
    }

    renderforgotPasswordConfirmation() {
        if (this.displayforgotPasswordConfirmation && this.props.forgotPasswordConfirmation) {
            return (
                <ul>
                    <li key="forgotPasswordConfirmation" className="session-confirmation">
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
                        <li key={`error-${i}`} className="session-error">
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
            <div className="session-form-container">
                <div className="session-form-box">
                    <form onSubmit={this.handleSubmit}>
                        Please enter your email to reset your password:

                        <br/>

                        {this.renderforgotPasswordConfirmation()}
                        {this.renderErrors()}

                        <br/>

                        <label className="session-input-container">
                            Email
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="session-textbox"
                            />
                        </label>

                        <br/>

                        <div className="btn--session-submit" onClick={this.handleSubmit}>
                            <input type="submit" value="Send password reset email" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
