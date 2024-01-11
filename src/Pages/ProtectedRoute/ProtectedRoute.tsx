import React, { ReactNode } from 'react';
import { useAuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const { user } = useAuthContext();
	if (!user) {
		return (
			<Navigate
				to="/main"
				replace
			/>
		);
	}
	return children;
};
export default ProtectedRoute;
