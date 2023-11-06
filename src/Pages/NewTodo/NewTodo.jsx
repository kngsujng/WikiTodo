import React, { useEffect, useState } from 'react';
import * as S from './NewTodo.style';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

export default function NewTodo() {
	const [newTodo, setNewTodo] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [disabled, setDisabled] = useState(false);

	const handleTextarea = (e) => {
		setNewTodo(e.target.value);
	};

	const addTodoItem = (e) => {
		e.preventDefault();
		if (newTodo !== '') {
			const currentDate = new Date();
			const id = currentDate.getTime().toString();
			const newTodoItem = {
				id: id,
				content: newTodo,
				completed: false,
			};
			// 로컬 스토리지에 데이터를 추가하고 업데이트된 데이터를 가져오기
			const updatedList = [...todoList, newTodoItem];
			localStorage.setItem('todoList', JSON.stringify(updatedList));
			setTodoList(updatedList); // todoList 업데이트
			setNewTodo('');
			setDisabled(false);
		}
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todoList'));
		setTodoList(todos);
	}, []);

	useEffect(() => {
		if (newTodo && newTodo.trim() !== '') {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [newTodo, todoList]);

	return (
		<>
			<Layout>
				<S.Wrapper>
					<Header>New Wiki-Todo</Header>
					<form onSubmit={addTodoItem}>
						<select name="subject">
							<option value="">주제 선택</option>
							<option value="wokd">Work</option>
							<option value="study">Study</option>
							<option value="exercise">Exercise</option>
							<option value="etc">Etc</option>
						</select>
						<label
							htmlFor="new_todo"
							className="screen-out"
						>
							Create your WikiTodo
						</label>
						<textarea
							value={newTodo}
							name="newTodo"
							id="new_todo"
							cols="30"
							rows="10"
							placeholder="내용을 입력하세요."
							onChange={handleTextarea}
						/>
						<Button
							text={'Add Now'}
							isDisabled={disabled}
						/>
					</form>
				</S.Wrapper>
			</Layout>
		</>
	);
}
