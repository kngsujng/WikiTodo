import React, { useContext, useEffect, useState } from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import AddTodo from '../../Components/AddTodo/AddTodo';
import * as S from './Main.style';
import Header from '../../Components/Header/Header';
import { ThemeModeContext } from './../../Context/ThemeModeProvider';

const filters = ['all', 'progressing', 'completed'];

export default function Main() {
	const { themeMode, toggleTheme } = useContext(ThemeModeContext);
	const [filter, setFilter] = useState(filters[0]);
	const [todoList, setTodoList] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	useEffect(() => {
		if (!localStorage.getItem('todoList')) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			// 새로고침해도 로컬스토리지 데이터 보이기 위해선, 저장해야 함 ! (핵심)
			const data = JSON.parse(localStorage.getItem('todoList'));
			setTodoList(data);
		}
	}, []);
	return (
		<>
			<button onClick={() => toggleTheme()}>다크모드 전환 버튼</button>
			<span>{themeMode}</span>
			<S.Wrapper>
				{/* <header>
					<h1>Get Organized Your Life!</h1>
					<p>
					WikiTodo is a simple and effective to-do list and task manager app
					which helps you manage time.
					</p>
				</header> */}
				<Header
					filters={filters}
					filter={filter}
					onFilterChange={setFilter}
				/>
				<TodoList
					filter={filter}
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
