import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import AuthModel from '../models/AuthModel';
import UserModel from '../models/UserModel';
import { userState } from '../recoil/atoms';

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
                window.location.replace('/');
            });
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;