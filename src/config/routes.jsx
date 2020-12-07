import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Register from '../pages/Register';
import Login from '../pages/Login';
import BasicNav from '../components/Nav/BasicNav';
import Navigation from '../components/Nav/Navigation';
import Dashboard from '../pages/Dashboard';
import TourIndex from '../components/Tours/TourIndex';
import TourShow from '../components/Tours/TourShow';
import TourdateIndex from '../components/Tourdates/TourdateIndex';
import VenueSearch from '../components/Forms/VenueSearch';
import NewTourDate from '../components/Forms/NewTourdate';
import Team from '../components/Team/Team';
import Profile from '../components/Profile/Profile';
import TourdateShow from '../components/Tourdates/TourdateShow';
import TodoList from '../components/TodoList/TodoListIndex';
import { loggedInState } from '../recoil/selectors';

import './Routes.css';




const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);

    return (
        <Switch>
            {!loggedIn ? (
                <>
                    <Route exact path='/' component={Login} />
                    <Route path='/register' component={Register} />
                </>
            ) : (
                    <>
                        <BasicNav />
                        <div className="navigation">
                            <Navigation />
                        </div>
                        <div className="dashboard">
                            <div className="main">
                                <Route path='/dashboard' component={Dashboard} />
                                <Route exact path='/tours' component={TourIndex} />
                                <Route path='/tours/:id' component={TourShow} />
                                <Route path='/tourdates' component={TourdateIndex} />
                                <Route path='/tourdate/:id' component={TourdateShow} />
                                <Route path='/select-venue' component={VenueSearch} />
                                <Route path='/create-tourdate' component={NewTourDate} />
                                <Route path='/team' component={Team} />
                                <Route path='/profile' component={Profile} />
                            </div>
                        </div>
                        <div>
                            <TodoList />
                        </div>
                    </>
                )}
        </Switch>
    )
}

export default Routes;