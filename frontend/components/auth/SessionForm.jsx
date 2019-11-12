import React from 'react';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitWithDefaultUsername = this.handleSubmitWithDefaultUsername.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Set the username to first part of email if there is no username
    if (this.state.username.replace(/ /g, '') === '') {
      this.setState({
        username: this.state.email.split('@')[0]
      }, this.handleSubmitWithDefaultUsername)
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
  }

  handleSubmitWithDefaultUsername() {
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="session-errors-ul">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderUsernameInput() {
    if (this.props.formType === 'signup') {
      return (
        <label className="session-input-container">
          Username
          <br />
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="session-textbox"
          />
        </label>
      )
    }

    return null
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-box">
          <form onSubmit={this.handleSubmit}>
            Welcome to OSUSCN!
            <br />
            Please {this.props.formType} to continue
            
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


            <div className="login-form">
              <br />

              {this.renderUsernameInput()}

              <br />

              <label className="session-input-container">
                  Password
                  <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-textbox"
                  />
              </label>

              <br />

              <div className="session-submit" onClick={this.handleSubmit}>
                <input type="submit" value={this.props.formType} />
              </div>

              <br/>
            </div>
          </form>

          <div className="divider">
            <hr className="left" />
              OR
            <hr className="right" />
          </div>
          {/* ^^^ source: https://stackoverflow.com/a/2812819/7974948 */}
          <br />
          
          <div>
            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;