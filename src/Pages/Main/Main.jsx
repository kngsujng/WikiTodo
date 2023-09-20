import React, { useState } from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import AddTodo from '../../Components/AddTodo/AddTodo';
import * as S from './Main.style';

export default function Main() {
	let [todoList, setTodoList] = useState([]);
	let [newTodo, setNewTodo] = useState('');
	return (
		<>
			<S.Wrapper>
				{/* <header>
					<h1>Get Organized Your Life!</h1>
					<p>
						WikiTodo is a simple and effective to-do list and task manager app
						which helps you manage time.
					</p>
				</header> */}
				<TodoList
					todoList={todoList}
					setTodoList={setTodoList}
				/>
				<AddTodo
					todoList={todoList}
					setTodoList={setTodoList}
					newTodo={newTodo}
					setNewTodo={setNewTodo}
				/>
			</S.Wrapper>
		</>
	);
}
