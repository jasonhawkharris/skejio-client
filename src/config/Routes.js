import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Feed from '../components/feed/Feed';

import { useRecoilValue } from 'recoil';
import { loggedInState } from '../recoil/selectors';

const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {loggedIn && (
                <Switch>
                    <Route exact path='/feed' component={Feed} />
                </Switch>
            )}
        </Switch>
    );
}

export default Routes;