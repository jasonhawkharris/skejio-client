import React, { useState } from 'react';
import AuthModel from '../models/AuthModel';
import UserModel from '../models/UserModel';

import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';
import { NavLink } from 'react-router-dom';

import './Login.css';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setUser = useSetRecoilState(userState);

    const handleSubmit = event => {
        event.preventDefault();
        AuthModel.login({ email, password })
            .then((response) => {
                console.log(response);
                localStorage.setItem('uid', response.signedJwt);
                UserModel.show().then((response) => {
                    console.log(response)
                    setUser(response.user);
                    props.history.push('/tours');
                });
            });
    }

    return (
        <div className="login">
            <div className="ui raised segment">
                <h2>Login</h2>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input
                            type='text'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                        />
                    </div>

                    <button className="ui button" type="submit">
                        Log In
                    </button>
                </form>
            </div>
            <NavLink to='/register'>No account? Register here.</NavLink>
        </div>
    )
}

export default Login;