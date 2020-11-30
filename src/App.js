/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from './recoil/atoms';

import Home from './pages/Home';
import UserModel from './models/UserModel';
import './App.css';

import 'semantic-ui-css/semantic.min.css'


const App = props => {
	const setUser = useSetRecoilState(userState);

	useEffect(() => {
		if (localStorage.uid) {
			UserModel.show().then(response => {
				setUser(response.user);
			});
		}
	}, []);

	return (
		<div className="app">
			<Home />
		</div>
	)
}

export default App;
