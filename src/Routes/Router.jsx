import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './../Pages/Main/Main';
import Signup from '../Pages/SignUp/SignUp';
import Login from './../Pages/Login/Login';
import NewTodo from '../Pages/NewTodo/NewTodo';

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
				<Route
					path="/new"
					element={<NewTodo />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
