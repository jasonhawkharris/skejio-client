import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import AuthModel from '../models/AuthModel';
import UserModel from '../models/UserModel';
import { userState } from '../recoil/atoms';

import './Login.css';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setUser = useSetRecoilState(userState);
    const userData = { email, password };

    const handleSubmit = event => {
        event.preventDefault();
        AuthModel.login(userData).then(response => {
            localStorage.setItem('uid', response.signedJwt);
            UserModel.show().then(response => {
                setUser(response.user);
                props.history.push('/dashboard');
            });
        });
    }

    return (
        <div className="login-page-container">
            <div className="app-description">
                <h1 className="logo">skej.<span id="io">io</span></h1>
                <p>An artist-centric application for managing life on the road.</p>
            </div>
            <div className="login-form">
                <div className="ui raised segment">
                    <h1>Login</h1>
                    <div className="ui divider"></div>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <div className="ui big fluid icon input">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <div className="ui big fluid icon input">
                                <input
                                    className="ui big input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <input type="submit" className="ui fluid big pink submit button" value="Login" />
                        </div>
                    </form>
                    <div className="ui divider"></div>
                    <button
                        className="ui blue big fluid button"
                        onClick={e => window.location.replace('/register')}
                    >Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login;