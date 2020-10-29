import React, { useState } from 'react';

import AuthModel from '../models/AuthModel';

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
        <div>
            <h2>Register for an Account</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="accountType">Choose an account type:</label>
                    <select
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="Artist">Artist</option>
                        <option value="Manager">Manager</option>
                        <option value="Teammate">Teammate</option>
                    </select>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <input type='submit' value='register' />
            </form>
        </div>
    );
}

export default Register;