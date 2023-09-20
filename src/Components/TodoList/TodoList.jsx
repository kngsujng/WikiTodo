import React from 'react';
import * as S from './TodoList.style';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function TodoList({ todoList, setTodoList }) {
	return (
		<>
			<S.Wrapper>
				<h1>Todo List</h1>
				<ul>
					{todoList.map((v, i) => (
						<li key={i}>
							{v}
							<button>
								<FaRegTrashAlt />
							</button>
						</li>
					))}
				</ul>
			</S.Wrapper>
		</>
	);
}
