import React, { useState } from 'react';

import AuthModel from '../models/AuthModel';

import './Register.css';

const Register = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        AuthModel.register({
            firstName,
            lastName,
            username,
            email,
            accountType,
            password,
        }).then(response => {
            console.log(response);
            if (response.status === 201) {
                props.history.push('/login');
            } else {
                setError(response.message);
            }
        });
    }

    return (
        <div className="register">
            <div className="ui raised segment">
                <div className="ui form">
                    <h2>Register for an Account</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <input
                                type="text"
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                placeholder="First Name"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                placeholder="Username"
                            />
                        </div>
                        <div className="field">
                            <select
                                onChange={(e) => setAccountType(e.target.value)}
                                className="ui fluid dropdown"
                            >
                                <option value="" selected>Choose your account type...</option>
                                <option value="Artist">Artist</option>
                                <option value="Manager">Manager</option>
                                <option value="Teammate">Teammate</option>
                            </select>
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

                        <input className="ui button" type='submit' value='Submit' />
                    </form>
                </div>
            </div >
        </div>
    );
}

export default Register;