import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppRoutesContainer from './app_routes_container';

export const Root = (props) => (
  <Provider store={props.store}>
    <HashRouter>
      <AppRoutesContainer />
    </HashRouter>
  </Provider>
)