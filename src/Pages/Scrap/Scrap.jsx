import React, { useEffect, useState } from 'react';
import * as S from './Scrap.style';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import TodoItem from '../../Components/TodoItem/TodoItem';

export default function Scrap() {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('todoList')) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			const data = JSON.parse(localStorage.getItem('todoList'));
			setTodoList(data);
		}
	}, []);
	return (
		<Layout>
			<Header>⭐️ Important Todo List</Header>
			<S.Wrapper>
				<ul>
					{todoList.map((todo) => {
						if (todo.isImportant) {
							return (
								<TodoItem
									key={todo.id}
									todo={todo}
									todoList={todoList}
									setTodoList={setTodoList}
								/>
							);
						}
					})}
				</ul>
			</S.Wrapper>
		</Layout>
	);
}
