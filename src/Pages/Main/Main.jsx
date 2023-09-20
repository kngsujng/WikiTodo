import React from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import AddTodo from '../../Components/AddTodo/AddTodo';
import * as S from './Main.style';

export default function Main() {
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
				<TodoList />
				<AddTodo />
			</S.Wrapper>
		</>
	);
}
