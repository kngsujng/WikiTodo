import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import { useTodos } from '../../Context/TodoContext';

export default function Edit() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [todoList, dispatch] = useTodos();
	const [todoItem, setTodoItem] = useState(todoList.find((v) => v.id === id));

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'UPDATE',
			todo: todoItem,
			id,
		});
		navigate('/main');
	};

	return (
		<Layout>
			<Header>New Wiki-Todo</Header>
			<Form
				onSubmit={onSubmit}
				todoItem={todoItem}
				setTodoItem={setTodoItem}
				buttonText={'Edit Todo'}
			/>
		</Layout>
	);
}
