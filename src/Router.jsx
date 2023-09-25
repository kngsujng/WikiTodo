import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './Components/TodoList/TodoList';
import Main from './Pages/Main/Main';

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<Main />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
