import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoForm from '../../Components/TodoForm/TodoForm';
import { v4 as uuid } from 'uuid';
import { useTodos } from '../../Context/TodoContext';
import { useEffect, useState } from 'react';

export default function Create() {
	const [, dispatch] = useTodos();
	const [disabled, setDisabled] = useState(false);
	const [todoItem, setTodoItem] = useState({
		id: uuid(),
		date: new Date().toLocaleDateString(),
		category: '',
		title: '',
		detail: '',
		isImportant: false,
		isCompleted: false,
	});

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'CREATE',
			todo: todoItem,
		});
		setTodoItem((prev) => ({
			...prev,
			id: uuid(),
			category: '',
			title: '',
			detail: '',
			isImportant: false,
		}));
		setDisabled(false);
	};

	useEffect(() => {
		if (
			todoItem.category !== '' &&
			todoItem.title &&
			todoItem.title.trim() !== ''
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [todoItem]);

	return (
		<Layout>
			<TodoHead>New Wiki-Todo</TodoHead>
			<TodoForm
				todoItem={todoItem}
				setTodoItem={setTodoItem}
				onSubmit={onSubmit}
				disabled={disabled}
				buttonText={'Add Now'}
			/>
		</Layout>
	);
}
