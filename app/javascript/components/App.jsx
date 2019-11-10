import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../redux/utils/route_util';
import { Splash } from './splash/Splash';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';

export const App = () => (
    <div>
        <header>
            <a className="logo">OSUSCN</a>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);