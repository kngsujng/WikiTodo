import React, { useEffect, useState } from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import AddTodo from '../../Components/AddTodo/AddTodo';
import * as S from './Main.style';
import Todo from '../../Components/Todo/Todo';

export default function Main() {
	const [todoList, setTodoList] = useState([]);
	const [status, setStatus] = useState('all');
	const [newTodo, setNewTodo] = useState('');
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
				<S.NavWrapper>
					<h1>Todo List</h1>
					<ul>
						<li onClick={() => setStatus('all')}>All</li>
						<li onClick={() => setStatus('progressing')}>Progressing</li>
						<li onClick={() => setStatus('completed')}>Completed</li>
					</ul>
				</S.NavWrapper>
				<Todo
					todoList={todoList}
					setTodoList={setTodoList}
					status={status}
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
