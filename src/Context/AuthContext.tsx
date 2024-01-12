import React, { ReactNode, createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUserInfo, googleLogin, emailLogin, logout } from '../Api/firebase';
import { Email, Pwd, User, UserId } from '../Model/auth';

interface AuthContextType {
	user: User | null;
	uid: UserId;
	googleLogin: () => void;
	emailLogin: (email: Email, pwd: Pwd) => void;
	logout: () => void;
}

const defaultUser: AuthContextType = {
	user: null,
	uid: '',
	googleLogin: () => null,
	emailLogin: (email: Email, pwd: Pwd) => null,
	logout: () => null,
};
export const AuthContext = createContext<AuthContextType>(defaultUser);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		getUserInfo((user) => setUser(user));
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				uid: user ? user.uid : '',
				googleLogin,
				emailLogin,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthContextProvider;
