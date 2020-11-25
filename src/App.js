/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { userState } from './recoil/atoms';
import { loggedInState } from './recoil/selectors';

import Home from './pages/Home';
import Login from './pages/Login';
import UserModel from './models/UserModel';
import './App.css';


const App = props => {
	const setUser = useSetRecoilState(userState);
	const loggedIn = useRecoilState(loggedInState);

	useEffect(() => {
		if (localStorage.uid) {
			UserModel.show().then(response => {
				console.log(response);
				setUser(response.user);
			});
		}
	}, []);

	return (
		<>
			{
				!loggedIn ? (
					<Home />
				) : (
						<Login />
					)}
		</>
	)
}

export default App;
