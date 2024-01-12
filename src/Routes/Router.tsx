import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Signup from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import Create from '../Pages/Create/Create';
import Edit from '../Pages/Edit/Edit';
import Detail from '../Pages/Detail/Detail';
import Scrap from '../Pages/Scrap/Scrap';
import Start from '../Pages/Start/Start';
import ProtectedRoute from '../Pages/ProtectedRoute/ProtectedRoute';
import { useState } from 'react';

export const Router = () => {
	const [user] = useState(!!localStorage.getItem('user'));

	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					path="/"
					element={user ? <Main /> : <Start />}
				/>
				<Route
					index
					path="/main"
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
					element={<Create />}
				/>
				<Route
					path="/edit/:id"
					element={<Edit />}
				/>
				<Route
					path="/detail/:id"
					element={<Detail />}
				/>
				<Route
					path="/scrap"
					element={
						<ProtectedRoute>
							<Scrap />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
