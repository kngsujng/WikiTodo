import { useEffect } from 'react';
import * as S from './AddTodo.style';

export default function AddTodo({
	newTodo,
	setNewTodo,
	todoList,
	setTodoList,
}) {
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
					onClick={(e) => {
						e.preventDefault();
						setTodoList((prev) => [
							...prev,
							{
								content: newTodo,
								completed: false,
							},
						]);
						setNewTodo('');
					}}
				>
					Add Now
				</button>
			</S.Wrapper>
		</>
	);
}
