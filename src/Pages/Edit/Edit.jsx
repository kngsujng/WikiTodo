import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoForm from '../../Components/TodoForm/TodoForm';
import { useTodos } from '../../Context/TodoContext';

export default function Edit() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { todos, dispatch } = useTodos();
	const [todoItem, setTodoItem] = useState(todos.find((v) => v.id === id));

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
			<TodoHead>New Wiki-Todo</TodoHead>
			<TodoForm
				onSubmit={onSubmit}
				todoItem={todoItem}
				setTodoItem={setTodoItem}
				buttonText={'Edit Todo'}
			/>
		</Layout>
	);
}
