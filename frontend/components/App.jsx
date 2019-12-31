import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';
import HeaderRightContainer from './header_right/header_right_container';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';
import ForgotPasswordFormContainer from './auth/forgot_password_form_container';

export const App = () => (
  <div>
    <header>
      <Link to="/" className="logo"> OSUSCN </Link>
      <HeaderRightContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/forgot-password" component={ForgotPasswordFormContainer} />
      <Route exact path="/" component={LogInFormContainer} />
    </Switch>
  </div>
);