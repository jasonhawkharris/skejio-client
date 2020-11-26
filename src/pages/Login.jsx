import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            console.log('Response from AuthModel.login():', response);
            localStorage.setItem('uid', response.signedJwt);
            UserModel.show().then(response => {
                console.log('Response from UserModel.show():', response);
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
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        /><br /><br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        /><br /><br />
                        <input type="submit" className="ui fluid pink submit button" value="Login" />
                    </form>
                </div>
                <p>
                    No account? Register&nbsp;
                    <span id="here">
                        <NavLink to='/register'>here</NavLink>
                    </span>.
                    </p>
            </div>
        </div >
    )
}

export default Login;