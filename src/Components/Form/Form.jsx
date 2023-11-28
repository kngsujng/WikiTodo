import React from 'react';
import * as S from './Form.style';
import Button from '../Button/Button';

export default function Form({
	handleSubmit,
	newTodo,
	handleNewTodo,
	disabled,
}) {
	return (
		<S.FormWrapper onSubmit={handleSubmit}>
			<p>{newTodo.date}</p>
			<select
				name="category"
				required
				onChange={handleNewTodo}
				value={newTodo.category}
			>
				<option defaultValue="카테고리 (필수)">카테고리 (필수)</option>
				<option value="work">👩🏻‍💻 업무</option>
				<option value="study">📚 공부</option>
				<option value="exercise">👟 운동</option>
				<option value="plan">🤝 약속</option>
				<option value="etc">🎵 기타</option>
			</select>
			<label
				htmlFor="newTodo_title"
				className="screen-out"
			></label>
			<input
				type="text"
				required
				name="title"
				id="newTodo_title"
				placeholder="제목을 입력하세요. (필수)"
				value={newTodo.title ?? ''}
				onChange={handleNewTodo}
			/>
			<label
				htmlFor="newTodo_detail"
				className="screen-out"
			>
				Create your WikiTodo
			</label>
			<textarea
				name="detail"
				id="newTodo_detail"
				cols="30"
				rows="10"
				placeholder="내용을 입력하세요. (선택)"
				value={newTodo.detail ?? ''}
				onChange={handleNewTodo}
			/>
			<div>
				<input
					name="isImportant"
					type="checkbox"
					id="inp_check"
					checked={newTodo.isImportant}
					onChange={handleNewTodo}
				/>
				<label htmlFor="inp_check"> Important 🚨</label>
			</div>
			<Button
				text={'Add Now'}
				isDisabled={disabled}
			/>
		</S.FormWrapper>
	);
}
