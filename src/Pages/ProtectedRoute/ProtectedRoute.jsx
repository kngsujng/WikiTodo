import React from 'react';
import { useAuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
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
}
