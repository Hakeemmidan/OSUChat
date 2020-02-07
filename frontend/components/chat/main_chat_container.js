import { connect } from 'react-redux';
import React from 'react';
import { load } from '../../actions/message_actions';
import { MainChat } from './MainChat';

const mapStateToProps = ({entities, session}) => {
  return {
    currentUser: entities.users[session.id],
    messages: entities.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadChat: (data) => dispatch(load(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainChat);