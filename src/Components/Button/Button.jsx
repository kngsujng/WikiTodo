import React from 'react';
import * as S from './Button.style';
import { useLocation } from 'react-router-dom';

export default function Button({ text, isDisabled, handleClick }) {
	const { pathname } = useLocation();

	if (pathname === '/main') {
		return (
			<S.GotoNewpageBtn
				disabled={isDisabled}
				onClick={handleClick}
			>
				{text}
			</S.GotoNewpageBtn>
		);
	}
	if (pathname === '/new' || pathname.startsWith('/edit/')) {
		return (
			<S.TodoFormBtn
				disabled={isDisabled}
				onClick={handleClick}
			>
				{text}
			</S.TodoFormBtn>
		);
	}
}
