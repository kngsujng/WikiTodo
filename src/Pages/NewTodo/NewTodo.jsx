import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as S from './NewTodo.style';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';

export default function NewTodo() {
	const [newTodo, setNewTodo] = useState({
		id: uuid(),
		date: new Date().toLocaleDateString(),
		category: '',
		title: '',
		detail: '',
		isImportant: false,
		isCompleted: false,
	});
	const [todoList, setTodoList] = useState([]);
	const [disabled, setDisabled] = useState(false);

	const handleNewTodo = (e) => {
		const { name, value } = e.target;
		if (name === 'isImportant') {
			setNewTodo((prev) => ({ ...prev, isImportant: !prev.isImportant }));
			return;
		}
		// 입력 폼에서 변경이 발생한 'name'의 값에 따라 객체의 속성 이름을 동적으로 결정한다.
		setNewTodo((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTodo !== '') {
			// 로컬 스토리지에 데이터를 추가하고 업데이트된 데이터를 가져오기
			const updatedList = [...todoList, newTodo];
			localStorage.setItem('todoList', JSON.stringify(updatedList));
			setTodoList(updatedList); // todoList 업데이트
			setNewTodo((prev) => ({
				...prev,
				id: uuid(),
				category: '',
				title: '',
				detail: '',
				isImportant: false,
			}));
			setDisabled(false);
		}
	};

	useEffect(() => {
		if (!localStorage.getItem('todoList')) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			// 새로고침해도 로컬스토리지 데이터 보이기 위해선, 저장해야 함 ! (핵심)
			const todos = JSON.parse(localStorage.getItem('todoList'));
			setTodoList(todos);
		}
	}, []);

	useEffect(() => {
		if (
			newTodo.category !== '' &&
			newTodo.title &&
			newTodo.title.trim() !== ''
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [newTodo]);

	return (
		<>
			<Layout>
				<S.Wrapper>
					<Header>New Wiki-Todo</Header>
					<Form
						newTodo={newTodo}
						handleNewTodo={handleNewTodo}
						handleSubmit={handleSubmit}
						disabled={disabled}
					/>
				</S.Wrapper>
			</Layout>
		</>
	);
}
