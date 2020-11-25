import React, { useState } from 'react';
import AuthModel from '../models/AuthModel';
import UserModel from '../models/UserModel';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = { email, password };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(userData);
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