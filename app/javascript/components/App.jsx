import React from 'react';
// import { AuthRoute } from '../util/route_util';

import { Switch, Route } from 'react-router-dom';
import { Splash } from './splash/Splash';

// import SignUpFormContainer from './auth/signup_form_container';
// import LogInFormContainer from './auth/login_form_container';

export const App = () => (
    <div>
        <header>
            <a className="logo">OSUSCN</a>
        </header>
        <Switch>
            {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
            <Route exact path="/" component={Splash} />
            {/* task: Clicking on something that has no route should re-locate the user to the home page */}
        </Switch>
    </div>
);