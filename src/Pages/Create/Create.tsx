import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoForm from '../../Components/TodoForm/TodoForm';
import { v4 as uuid } from 'uuid';
import { useTodos } from '../../Context/TodoContext';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../Context/AuthContext';
import { TodoItem } from './../../Model/todo';
import useScrap from '../../Hooks/useScrap';

const Create: React.FC = () => {
	const { user, uid } = useAuthContext();
	const { dispatch } = useTodos();
	const { addOrUpdateItem } = useScrap();
	const [disabled, setDisabled] = useState<boolean>(false);
	const [todoItem, setTodoItem] = useState<TodoItem>({
		id: uuid(),
		date: new Date().toLocaleDateString(),
		category: '카테고리 (필수)',
		title: '',
		detail: '',
		isImportant: false,
		isCompleted: false,
	});

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({
			type: 'CREATE',
			todo: todoItem,
			user,
			uid,
		});
		if (todoItem.isImportant) {
			addOrUpdateItem.mutate({
				...todoItem,
				isImportant: true,
			});
		}
		setTodoItem((prev) => ({
			...prev,
			id: uuid(),
			category: '카테고리 (필수)',
			title: '',
			detail: '',
			isImportant: false,
		}));
		setDisabled(false);
	};

	useEffect(() => {
		if (
			todoItem.category !== '카테고리 (필수)' &&
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
};

export default Create;
