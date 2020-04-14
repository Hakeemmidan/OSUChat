import React, { useState } from "react";
import PropTypes from 'prop-types';

export const MessageForm = ({ currentUser }) => {
  const [body, useBody] = useState('');

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Disallow empty messages
    if (body.replace(/\s/g, '') === '') return;

    let messageObj = {
      body: body,
      authorId: currentUser.id,
      authorUsername: currentUser.username
    };
    App.cable.subscriptions.subscriptions[0].speak({ message: messageObj });
    useBody('');
  }

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        className="chat-form__input"
        maxLength="280"
        value={body}
        onChange={e => useBody(e.currentTarget.value)}
        placeholder="Enter message here"
      />
      <input type="submit" className="chat-form__submit" value="⏎" />
    </form>
  )
}

MessageForm.propTypes = {
  currentUser: PropTypes.object.isRequired
};