import React from "react";
import MessageForm from "./MessageForm";

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
            case "messages":
              this.setState({ messages: data.messages });
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        load: function () { return this.perform("load") }
      }
    );

    let messageList = $('.message-list');
    messageList.scroll(() => {
      if (messageList.scrollTop() < 10) {
        App.cable.subscriptions.subscriptions[0].load();
      }
    })
  }

  loadChat(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li key={message.id}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        <button className="load-button"
          onClick={this.loadChat.bind(this)}>
          Load Chat History
        </button>
        <div className="message-list">{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default MainChat;