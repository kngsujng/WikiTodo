import React from 'react';
import * as S from './NoTodoItem.style';
import { useThemeContext } from '../../Context/ThemeModeProvider';

export default function NoTodoItem() {
	const { themeMode } = useThemeContext();

	return (
		<S.NoTodoWrapper>
			<img
				src={process.env.PUBLIC_URL + `/Image/${themeMode}-noTodoItem.svg`}
				alt="로딩중"
				width="10%"
			/>
			<p>Todo가 없습니다!</p>
		</S.NoTodoWrapper>
	);
}
