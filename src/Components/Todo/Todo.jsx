import React from 'react';
import TodoList from '../TodoList/TodoList';

export default function Todo({ status, todoList, setTodoList }) {
	const inPrograssList = todoList.filter((v) => !v.completed);
	const completedList = todoList.filter((v) => v.completed);
	if (status === 'all') {
		return (
			<TodoList
				todoList={todoList}
				setTodoList={setTodoList}
			/>
		);
	}
	if (status === 'progressing') {
		return (
			<TodoList
				todoList={inPrograssList}
				setTodoList={setTodoList}
			/>
		);
	}
	if (status === 'completed') {
		return (
			<TodoList
				todoList={completedList}
				setTodoList={setTodoList}
			/>
		);
	}
}
