import React from 'react';
import * as S from './Form.style';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';

export default function Form({
	newTodo,
	todoItem,
	handleNewTodo,
	handleUpdateTodo,
	handleSubmit,
	disabled,
}) {
	const { pathname } = useLocation();

	if (pathname === '/new') {
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

	if (pathname.startsWith('/edit/')) {
		const { date, category, title, detail, isImportant } = todoItem;
		return (
			<S.FormWrapper onSubmit={handleSubmit}>
				<p>{date}</p>
				<select
					name="category"
					required
					onChange={handleUpdateTodo}
					defaultValue={category}
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
					defaultValue={title}
					onChange={handleUpdateTodo}
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
					defaultValue={detail}
					onChange={handleUpdateTodo}
				/>
				<div>
					<input
						name="isImportant"
						type="checkbox"
						id="inp_check"
						defaultValue={isImportant}
						checked={isImportant}
						onChange={handleUpdateTodo}
					/>
					<label htmlFor="inp_check"> Important 🚨</label>
				</div>
				<Button
					text={'Edit Todo'}
					isDisabled={disabled}
				/>
			</S.FormWrapper>
		);
	}
}
