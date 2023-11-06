import React from 'react';
import * as S from './Button.style';
import { useLocation } from 'react-router-dom';

export default function Button({ text, isDisabled, handleClick }) {
	const { pathname } = useLocation();

	if (pathname === '/') {
		return (
			<S.GotoNewpageBtn
				disabled={isDisabled}
				onClick={handleClick}
			>
				{text}
			</S.GotoNewpageBtn>
		);
	}
	if (pathname === '/new') {
		return (
			<S.AddTodoBtn
				disabled={isDisabled}
				onClick={handleClick}
			>
				{text}
			</S.AddTodoBtn>
		);
	}
}
