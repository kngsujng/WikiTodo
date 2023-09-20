import React from 'react';
import * as S from './TodoList.style';

export default function TodoList({ todoList, setTodoList }) {
	return (
		<>
			<S.Wrapper>
				<ul>
					{todoList.map((v, i) => (
						<li key={i}>{v}</li>
					))}
				</ul>
			</S.Wrapper>
		</>
	);
}
