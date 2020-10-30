import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Feed from '../components/feed/Feed';
import Tours from '../components/tours/Tours';
import Dates from '../components/dates/Dates';
import Profile from '../components/profile/Profile';
import Team from '../components/team/Team';
import Forms from '../components/forms/Forms';
import Settings from '../components/settings/Settings';

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
                    <Route exact path='/' component={Feed} />
                    <Route exact path='/tours' component={Tours} />
                    <Route exact path='/tour-dates' component={Dates} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/team' component={Team} />
                    <Route exact path='/forms' component={Forms} />
                    <Route exact path='/settings' component={Settings} />

                </Switch>
            )}
        </Switch>
    );
}

export default Routes;