import React from "react";
import MessageFormContainer from "./message_form_container";

export class MainChat extends React.Component {
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
              this.setState({
                messages: data.messages.concat(this.state.messages),
                firstLoadedMsgId: data.firstLoadedMsgId
              });
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        load: function (data) { return this.perform("load", data) }
      }
    );
    
    this.loadInitialChat();
    this.activatePaginationListener();
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  loadChat(firstLoadedMsgId) {
    let loadData = {firstLoadedMsgId: firstLoadedMsgId};
    return App.cable.subscriptions.subscriptions[0].load(loadData);
  }

  loadInitialChat() {
    let that = this;
    const loadInitialChat = setInterval(() => {
      if (that.loadChat()) clearInterval(loadInitialChat);
    }, 1000)
  }

  activatePaginationListener() {
    // Load more chat on scroll up
    let messageList = $('.message-list');
    messageList.scroll(() => messageList.scrollTop() < 5 ? this.loadChat(this.state.firstLoadedMsgId) : null)
  }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li key={`main-chat-${message.id}`}>
          {message.author_username} ---------- {message.body}
          <div ref={this.bottom} />
        </li>
      );
    });

    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        <div className="message-list">{messageList}</div>
        <MessageFormContainer />
      </div>
    );
  }
}