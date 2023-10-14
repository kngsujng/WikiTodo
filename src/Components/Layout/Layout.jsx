import React from 'react';
import NavBar from '../NavBar/NavBar';
import * as S from './Layout.style';

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<S.Container>{children}</S.Container>
		</>
	);
}
