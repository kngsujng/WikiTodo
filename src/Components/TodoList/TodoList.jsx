import React, { useEffect, useState } from 'react';
import * as S from './TodoList.style';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function TodoList({ todoList, setTodoList }) {
	return (
		<>
			<S.Wrapper>
				<h1>Todo List</h1>
				<ul>
					{todoList.map((v, i) => (
						<li key={v.content.toString()}>
							<div className="todoItemWrap">
								<input
									type="checkbox"
									value={v.content}
									checked={v.completed}
									onChange={(e) => {
										setTodoList((prev) => {
											const updatedList = [...prev]; // 기존 배열 복제
											updatedList[i] = { ...v, completed: e.target.checked }; // 특정 객체의 completed 업데이트
											return updatedList;
										});
									}}
								/>
								<p
									className="todoItem"
									style={
										v.completed
											? {
													color: '#bdbdbd',
													textDecoration: 'line-through',
											  }
											: null
									}
								>
									{v.content}
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
