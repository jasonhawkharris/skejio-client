/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import UserModel from '../../models/UserModel';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

import './Nav.css';

const Nav = props => {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function () {
        if (localStorage.uid) {
            UserModel.show().then((response) => {
                setUser(response.users);
            })
        }
    }, []);

    const logout = () => {
        setUser(null);
        localStorage.clear();
    }

    return (
        <div className='sidebar'>
            <div className='logo'>
                skej.io
            </div>
            <div className='ui secondary vertical pointing menu' id="side-nav">
                {user ? (
                    <>
                        <div>{user.username}</div>
                        <NavLink className="item" to={"/feed"}>Activity</NavLink>
                        <NavLink className="item" to={"/tours"}>Tours</NavLink>
                        <NavLink className="item" to={"/tour-dates"}>Dates</NavLink>
                        <NavLink className="item" to={"/profile"}>My Profile</NavLink>
                        <NavLink className="item" to={"/team"}>My Team</NavLink>
                        <NavLink className="item" to={"/forms"}>My Forms</NavLink>
                        <NavLink className="item" to={"/settings"}>Settings</NavLink>
                        <div className="item" onClick={logout}>
                            Log Out
                        </div>
                    </>
                ) : (
                        <>
                            <NavLink className="item" to={"/login"}>Login</NavLink>
                            <NavLink className="item" to={"/register"}>Register</NavLink>
                        </>
                    )}
            </div>
        </div >
    )
}

export default Nav;