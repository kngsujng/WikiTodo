import React, { useContext, useEffect, useState } from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import AddTodo from '../../Components/AddTodo/AddTodo';
import * as S from './Main.style';
import Header from '../../Components/Header/Header';
import { ThemeModeContext } from './../../Context/ThemeModeProvider';

const filters = ['all', 'progressing', 'completed'];

export default function Main() {
	const { themeMode, setThemeMode, toggleTheme } = useContext(ThemeModeContext);
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
	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', themeMode);
		} else {
			// 새로고침해도 로컬스토리지 데이터 보이기 위해선, 저장해야 함 ! (핵심)
			const storedTheme = localStorage.getItem('theme');
			setThemeMode(storedTheme);
		}
	}, [themeMode, setThemeMode]);

	return (
		<>
			<S.Wrapper>
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
				<button
					className="btn_toggle"
					onClick={() => toggleTheme()}
				>
					{themeMode === 'light' ? '🌚' : '🌞'}
				</button>
			</S.Wrapper>
		</>
	);
}
