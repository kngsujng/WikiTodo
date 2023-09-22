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
						<li key={i}>
							<div>
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
								<label
									className="todoItem"
									style={
										completed.isChecked && completed.content === v
											? { color: '#bdbdbd', textDecoration: 'line-through' }
											: null
									}
								>
									{v}
								</label>
							</div>
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
