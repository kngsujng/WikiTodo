import React from 'react';
import * as S from './AddTodo.style';

export default function AddTodo() {
	return (
		<>
			<S.Wrapper>
				<label htmlFor="inp_todo">Create your WikiTodo</label>
				<input
					type="text"
					placeholder="Input your to-do!"
					id="inp_todo"
				/>
				<button type="button">add</button>
			</S.Wrapper>
		</>
	);
}
