import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import AuthModel from '../../models/AuthModel';
import UserModel from '../../models/UserModel';

const RegisterForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [artistName, setArtistName] = useState('');
    const [accountType, setAccountType] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const passwordMatch = password === passwordConfirm;
    const userData = {
        firstName,
        lastName,
        email,
        username,
        artistName,
        accountType,
        password,
    };


    const handleSubmit = event => {
        event.preventDefault();
        if (!passwordMatch) {
            console.log('passwords do not match');
        } else {
            AuthModel.register(userData)
                .then(response => {
                    UserModel.show()
                        .then(response => {
                            window.location.replace('/');
                        });
                });
        }
    }

    return (
        <>
            <h1>Register</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div className="field">
                    <input
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="artistName"
                        placeholder="Artist Name"
                        onChange={e => setArtistName(e.target.value)}
                        value={artistName}
                    />
                </div>
                <div className="field">
                    <select name="accountType"
                        onChange={e => setAccountType(e.target.value)}>
                        <option value="">--Please Choose One--</option>
                        <option value="Artist">Artist</option>
                        <option value="Manager">Manager</option>
                        <option value="Agent">Agent</option>
                        {/**teammates can only join when invited by a manager or an agent. Make separate registration form for them with hidden input that details the manager or agent who invited them. */}
                    </select>
                </div>
                <div className="field">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="field">
                    <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="Confirm Password"
                        onChange={e => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm}
                    />
                </div>
                {passwordMatch ? (
                    <>
                        {password === '' ? (
                            <></>
                        ) : (
                                <>
                                    <Icon color="green" name="checkmark" />
                                    <span id="match">Passwords Match</span><br /><br />
                                </>
                            )
                        }

                    </>
                ) : (
                        <>
                            <Icon color="red" name="remove" />
                            <span id="no-match">Passwords do not match</span><br /><br />
                        </>
                    )}
                <div className="field">
                    <input
                        type="submit"
                        className="ui pink fluid submit button"
                        value="Register"
                    />
                </div>
            </form>
        </>
    )
}

export default RegisterForm;