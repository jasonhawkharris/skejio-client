import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Feed from '../components/feed/Feed';
import Tours from '../components/tours/Tours';
import AllTourDates from '../components/dates/Dates';
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
            {!loggedIn ? (
                <>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </>
            ) : (
                    <>
                        <Route path='/feed' component={Feed} />
                        <Route path='/tours' component={Tours} />
                        <Route path='/tour-dates' component={AllTourDates} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/team' component={Team} />
                        <Route path='/forms' component={Forms} />
                        <Route path='/settings' component={Settings} />
                    </>
                )
            }
        </Switch>
    );
}

export default Routes;