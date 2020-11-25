import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import { loggedInState } from '../recoil/selectors';

const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);

    return (
        <Switch>
            {!loggedIn ? (
                <Route path='/login' component={Login} />
            ) : (
                    <Route path='/dashboard' component={Dashboard} />
                )}
        </Switch>
    )
}

export default Routes;