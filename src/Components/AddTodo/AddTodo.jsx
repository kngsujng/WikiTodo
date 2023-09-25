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
		if (newTodo !== '') {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [newTodo]);

	function handleAddBtn(e) {
		const currentDate = new Date();
		const id = currentDate.getTime().toString();
		e.preventDefault();
		if (newTodo !== '') {
			setDisabled(false);
			setTodoList((prev) => [
				...prev,
				{
					id: id,
					content: newTodo,
					completed: false,
				},
			]);
		}
		setNewTodo('');
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
				<p className="inpWarning">{}</p>
				<button
					type="submit"
					disabled={disabled}
					onClick={handleAddBtn}
				>
					Add Now
				</button>
			</S.Wrapper>
		</>
	);
}
