import React from "react";
import MessageFormContainer from "./message_form_container";

export class MainChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
    this.chatChannel;
  }

  componentDidMount() {
    this.chatChannel = App.cable.subscriptions.create(
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

  componentWillUnmount() {
    this.chatChannel.unsubscribe();
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
    let messageList = $('.chat-msgs-container');
    messageList.scroll(() => messageList.scrollTop() < 5 ? this.loadChat(this.state.firstLoadedMsgId) : null)
  }

  renderMessageList() {
    return (
      <div className="chat-msgs-container">
        <ul className="msgs-ul">
          {this.state.messages.map((message) => (
            <li key={`main-chat-${message.id}`} className="msg">
              <section className="msg__upper">
                <span className="msg__upper--author">
                  {message.author_username ? message.author_username : 'Benny'}
                </span>
                <span className="msg__upper--time-date">
                  {message.created_at}
                </span>
              </section>
              <section className="msg__lower">
                <div className="msg__lower--body">
                  {message.body}
                </div>
              </section>
              <div ref={this.bottom} />
            </li>))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="chat-container">
          {this.renderMessageList()}
          <MessageFormContainer />
        </div>
        <p className="contact">
          For feedback contact&nbsp;
          <a className="link" style={{color: 'lightgray'}} href="mailto:Hakeemmidan@gmail.com">
            Hakeemmidan@gmail.com
          </a>
        </p>
      </React.Fragment>
    );
  }
}