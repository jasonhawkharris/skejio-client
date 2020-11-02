/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Home from './pages/Home';

import { useSetRecoilState } from 'recoil';
import { userState } from './recoil/atoms';

import UserModel from './models/UserModel';

import './App.css';

function App(props) {
	const setUser = useSetRecoilState(userState);

	useEffect(function () {
		if (localStorage.uid) {
			UserModel.show().then(response => {
				console.log(response);
				setUser(response.user);
			})
		}
	}, [])

	return (
		<div className='App'>
			<Home />
		</div>
	);
}

export default App;
