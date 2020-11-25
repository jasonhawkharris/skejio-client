import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { loggedInState } from '../recoil/selectors';

import './Routes.css';
import BasicNav from '../components/Nav/BasicNav';
import Navigation from '../components/Nav/Navigation';
import TourIndex from '../components/Tours/TourIndex';

const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);

    return (
        <Switch>
            {!loggedIn ? (
                <>
                    <Route path='/login' component={Login} />
                </>
            ) : (
                    <>
                        <BasicNav />
                        <div className="dashboard">
                            <div className="navigation">
                                <Navigation />
                            </div>
                            <div className="main">
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/tours' component={TourIndex} />
                            </div>
                        </div>
                    </>

                )}
        </Switch>
    )
}

export default Routes;