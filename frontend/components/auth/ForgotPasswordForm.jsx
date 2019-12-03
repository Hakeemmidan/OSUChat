import React from 'react';

export class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="session-form-container">
                <div className="session-form-box">
                    <form onSubmit={this.handleSubmit}>
                        <label className="session-input-container">
                            Email
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="session-textbox"
                            />
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}
