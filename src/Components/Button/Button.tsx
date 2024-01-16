import React, { ReactNode } from 'react';
import * as S from './Button.style';
import { useLocation } from 'react-router-dom';

interface ButtonProps {
	text: ReactNode;
	isDisabled?: boolean;
	handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, isDisabled, handleClick }) => {
	const { pathname } = useLocation();

	if (pathname === '/main' || pathname === '/') {
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
};

export default Button;
