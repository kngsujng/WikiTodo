import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './../Pages/Main/Main';
import Signup from './../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					path="/"
					element={<Main />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
