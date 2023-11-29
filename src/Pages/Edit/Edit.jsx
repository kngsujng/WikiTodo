import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';

export default function Detail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		state: { todoList },
	} = useLocation();
	const [todoItem, setTodoItem] = useState(todoList.find((v) => v.id === id));
	const [disabled, setDisabled] = useState(false);

	const handleUpdateTodo = (e) => {
		const { name, value } = e.target;
		if (name === 'isImportant') {
			setTodoItem((prev) => ({ ...prev, isImportant: !prev.isImportant }));
			return;
		}
		// 입력 폼에서 변경이 발생한 'name'의 값에 따라 객체의 속성 이름을 동적으로 결정한다.
		setTodoItem((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoItem !== '') {
			// 로컬 스토리지에 데이터를 추가하고 업데이트된 데이터를 가져오기
			const updatedList = [...todoList, todoItem];
			localStorage.setItem('todoList', JSON.stringify(updatedList));
			setTodoItem(updatedList); // todoList 업데이트
			navigate('/');
		}
	};

	return (
		<Layout>
			<Header>New Wiki-Todo</Header>
			<Form
				handleUpdateTodo={handleUpdateTodo}
				handleSubmit={handleSubmit}
				todoItem={todoItem}
				disabled={disabled}
			/>
		</Layout>
	);
}
