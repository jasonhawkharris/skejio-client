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
            <div className='links'>
                <ul>
                    {user ? (
                        <>
                            <li>{user.username}</li>
                            <li>
                                <NavLink to={"/feed"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/tours"}>Tours</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/tour-dates"}>Dates</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/profile"}>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/team"}>Team</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/forms"}>Forms</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/settings"}>Settings</NavLink>
                            </li>
                            <li className='btn' onClick={logout}>
                                Log Out
                            </li>
                        </>
                    ) : (
                            <>
                                <li>
                                    <NavLink to={"/login"}>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/register"}>Register</NavLink>
                                </li>
                            </>
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Nav;