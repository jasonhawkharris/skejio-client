import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { loggedInState } from '../recoil/selectors';

import './Routes.css';
import BasicNav from '../components/Nav/BasicNav';

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
                                This is where the Nav Bar will go
                            </div>
                            <div className="main">
                                <Route path='/dashboard' component={Dashboard} />
                            </div>
                            <div className="todo-list">
                                This is where the Todo List will go
                            </div>
                        </div>
                    </>

                )}
        </Switch>
    )
}

export default Routes;