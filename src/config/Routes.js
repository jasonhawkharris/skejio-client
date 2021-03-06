import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Feed from '../components/feed/Feed';
import Tours from '../components/tours/ToursPage';
import NewTour from '../components/tours/NewTour';
import UpdateTourDate from '../components/dates/UpdateTourDate';
import TourShowPage from '../components/tours/TourShowPage';
import TourDatesPage from '../components/dates/TourDatesPage';
import TourDateShow from '../components/dates/TourDateShow';
import NewTourDate from '../components/dates/NewTourDate';
import NewTourDateFilled from '../components/dates/NewTourDateFilled';
import Profile from '../components/profile/Profile';
import Team from '../components/team/Team';
import Forms from '../components/forms/Forms';
import Settings from '../components/settings/Settings';
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
                        <Route path='/new-tour' component={NewTour} />
                        <Route path='/update-tour-date/:id' component={UpdateTourDate} />
                        <Route path='/tour-dates/:id' component={TourShowPage} />
                        <Route exact path='/tour-dates' component={TourDatesPage} />
                        <Route exact path='/new-tour-date' component={NewTourDate} />
                        <Route path='/new-tour-date/filled' component={NewTourDateFilled} />
                        <Route path='/tour-date/:id' component={TourDateShow} />
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