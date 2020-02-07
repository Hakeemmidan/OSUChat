import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';
import ForgotPasswordFormContainer from './auth/forgot_password_form_container';
import MainChatContainer from './chat/main_chat_container';


export const App = (props) => (
  <React.Fragment>
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/forgot-password" component={ForgotPasswordFormContainer} />
      <ProtectedRoute exact path="/chat" component={MainChatContainer} />
      <Route exact path="/*">
        {props.currentUser ? <MainChatContainer /> : <Redirect to={'/login'} />}
      </Route>
    </Switch>
  </React.Fragment>
);