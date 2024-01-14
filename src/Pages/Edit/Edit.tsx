import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoForm from '../../Components/TodoForm/TodoForm';
import { useTodos } from '../../Context/TodoContext';
import { useAuthContext } from '../../Context/AuthContext';
import { TodoItem as TodoItemType } from '../../Model/todo';
import useScrap from '../../Hooks/useScrap';
import useTitle from '../../Hooks/useTitle';

export default function Edit() {
	useTitle('WikiTodo | 편집');
	const { user, uid } = useAuthContext();
	const { id } = useParams();
	const navigate = useNavigate();
	const { todos, dispatch } = useTodos();
	const { addOrUpdateItem, removeItem } = useScrap();
	const [todoItem, setTodoItem] = useState<TodoItemType>(
		todos.find((v) => v.id === id) as TodoItemType
	);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 있는 것에서 없애면 없어져 o
		// 없는 것에서 있게 하면 안 돼 x
		if (todoItem.isImportant) {
			addOrUpdateItem.mutate({
				...todoItem,
				isImportant: todoItem.isImportant,
			});
		} else {
			removeItem.mutate(id as string);
		}

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
