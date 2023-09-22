import React, { useEffect, useState } from 'react';
import * as S from './TodoList.style';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function TodoList({ todoList, setTodoList }) {
	const [completed, setCompleted] = useState({ content: '', isChecked: false });
	return (
		<>
			<S.Wrapper>
				<h1>Todo List</h1>
				<ul>
					{todoList.map((v, i) => (
						<li key={v.toString()}>
							<div className="todoItemWrap">
								<input
									type="checkbox"
									value={v}
									onChange={(e) => {
										setCompleted((prev) => ({
											...prev,
											content: e.target.value,
											isChecked: e.target.checked,
										}));
									}}
								/>
								<p
									className="todoItem"
									style={
										completed.isChecked && completed.content === v
											? { color: '#bdbdbd', textDecoration: 'line-through' }
											: null
									}
								>
									{v}
								</p>
							</div>
							<button
								onClick={() => {
									let copy = [...todoList];
									copy.splice(i, 1);
									setTodoList(copy);
								}}
							>
								<FaRegTrashAlt />
							</button>
						</li>
					))}
				</ul>
			</S.Wrapper>
		</>
	);
}
