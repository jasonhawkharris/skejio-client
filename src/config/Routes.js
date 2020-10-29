import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

import { useRecoilValue } from 'recoil';
import { loggedInState } from '../recoil/selectors';

const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {loggedIn && (
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            )}
        </Switch>
    );
}

export default Routes;