import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignUpFormContainer from './forms/multi_field/signup_form_container';
import LogInFormContainer from './forms/multi_field/login_form_container';
import ForgotPasswordFormContainer from './forms/single_field/forgot_password_form_container';
import MainChatContainer from './chat/main_chat_container';
import ModalContainer from './modal/modal_container';
import { UnknownRoute } from './unknown_route/UnknownRoute';


export const App = (props) => (
  <React.Fragment>
    <ModalContainer />
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/forgot-password" component={ForgotPasswordFormContainer} />
      <ProtectedRoute exact path="/chat" component={MainChatContainer} />
      <Route exact path="/">
        {props.currentUser ? <MainChatContainer /> : <Redirect to={'/login'} />}
      </Route>
      <Route exact path="/*" component={UnknownRoute}/>
    </Switch>
  </React.Fragment>
);