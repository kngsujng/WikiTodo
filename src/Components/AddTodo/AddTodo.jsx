import { useEffect, useState } from 'react';
import * as S from './AddTodo.style';

export default function AddTodo({
	newTodo,
	setNewTodo,
	todoList,
	setTodoList,
}) {
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (newTodo.trim() !== '') {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [newTodo, todoList]);

	function addTodoItem(e) {
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
	}

	return (
		<>
			<S.Wrapper>
				<label htmlFor="inp_todo">Create your WikiTodo</label>
				<input
					type="text"
					placeholder="Input your to-do!"
					id="inp_todo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button
					type="submit"
					disabled={disabled}
					onClick={addTodoItem}
				>
					Add Now
				</button>
			</S.Wrapper>
		</>
	);
}
