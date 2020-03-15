import React from "react";

export class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Disallow empty messages
    if (this.state.body.replace(/\s/g, '') === '') return;

    let messageObj = { 
        body: this.state.body,
        authorId: this.props.currentUser.id,
        authorUsername: this.props.currentUser.username
    };
    App.cable.subscriptions.subscriptions[0].speak({ message: messageObj });
    this.setState({ body: "" });
  }

  render() {
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <input
          className="chat-form__input"
          maxLength="280"
          value={this.state.body}
          onChange={this.update("body")}
          placeholder="Enter message here"
        />
        <input type="submit" className="chat-form__submit" value="⏎" />
      </form>
    );
  }
}