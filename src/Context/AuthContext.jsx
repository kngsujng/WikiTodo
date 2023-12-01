import React, { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUserInfo, googleLogin, emailLogin, logout } from '../Api/firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	useEffect(() => {
		getUserInfo((user) => setUser(user));
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, setUser, googleLogin, emailLogin, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	return useContext(AuthContext);
}
