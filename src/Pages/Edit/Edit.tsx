import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoForm from '../../Components/TodoForm/TodoForm';
import { useTodos } from '../../Context/TodoContext';
import { useAuthContext } from '../../Context/AuthContext';
import { TodoItem as TodoItemType } from '../../Model/todo';

export default function Edit() {
	const { user, uid } = useAuthContext();
	const { id } = useParams();
	const navigate = useNavigate();
	const { todos, dispatch } = useTodos();
	const [todoItem, setTodoItem] = useState<TodoItemType>(
		todos.find((v) => v.id === id) as TodoItemType
	);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({
			type: 'UPDATE',
			todo: todoItem,
			id: id ? id : '',
			user,
			uid,
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
