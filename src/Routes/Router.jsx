import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './../Pages/Main/Main';
import SignUp from './../Pages/SignUp/SignUp';

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
					element={<SignUp />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
