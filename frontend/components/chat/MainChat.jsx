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
    
    // Load initila chat
    let that = this;
    const loadInitialChat = setInterval(() => {
      if (that.loadChat()) clearInterval(loadInitialChat);
    }, 1000)

    // Load more chat on scroll up
    let messageList = $('.message-list');
    messageList.scroll(() => messageList.scrollTop() < 10 ? this.loadChat() : null)
  }

  loadChat(e) {
    if (e) e.preventDefault();
    return App.cable.subscriptions.subscriptions[0].load();
  }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li key={message.id}>
          {message.id} ---------- {message.body}
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