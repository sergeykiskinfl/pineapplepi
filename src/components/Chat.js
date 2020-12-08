// React stuff
import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "./chat.css";
import BotAvatar from "../images/BotAvatar.png";

// A chat via the external widget
class Chat extends Component {
  componentDidMount() {
    addResponseMessage(
      "Hello! I am an online consultant. What can I help you?"
    );
  }

  handleNewUserMessage = newMessage => {
    let response = "A consultant will reply to you in a few seconds";

    addResponseMessage(response);
  };

  render() {
    return (
      <Widget
        handleNewUserMessage={this.handleNewUserMessage}
        subtitle="Chat with a consultant"
        profileAvatar={BotAvatar}
        data-cy="Chat"
      />
    );
  }
}

export default Chat;
