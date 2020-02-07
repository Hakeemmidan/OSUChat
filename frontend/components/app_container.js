import { connect } from 'react-redux';
import React from 'react';
import { App } from './App';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  };
};

export default connect(mapStateToProps, null)(App);