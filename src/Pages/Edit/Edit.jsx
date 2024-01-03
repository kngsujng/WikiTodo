import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoForm from '../../Components/TodoForm/TodoForm';
import { useTodos } from '../../Context/TodoContext';
import { useAuthContext } from '../../Context/AuthContext';
import { editTodo } from '../../Api/firebase';

export default function Edit() {
	const { user } = useAuthContext();
	const { id } = useParams();
	const navigate = useNavigate();
	const { todos, dispatch } = useTodos();
	const [todoItem, setTodoItem] = useState(todos.find((v) => v.id === id));

	const onSubmit = (e) => {
		e.preventDefault();
		if (user) {
			editTodo(todoItem);
			dispatch({
				type: 'UPDATE',
				todo: todoItem,
				id,
			});
		}
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
