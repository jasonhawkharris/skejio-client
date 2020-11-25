/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from './recoil/atoms';

import Home from './pages/Home';
import UserModel from './models/UserModel';
import './App.css';


const App = props => {
	const setUser = useSetRecoilState(userState);

	useEffect(() => {
		if (localStorage.uid) {
			UserModel.show().then(response => {
				console.log(response);
				setUser(response.user);
			});
		}
	}, []);

	return (
		<Home />
	)
}

export default App;
