import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as S from './NewTodo.style';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

export default function NewTodo() {
	const [newTodo, setNewTodo] = useState({
		id: uuid(),
		date: new Date().toLocaleDateString(),
		category: '',
		title: '',
		detail: '',
		isImportant: false,
		isCompleted: false,
	});
	const [todoList, setTodoList] = useState([]);
	const [disabled, setDisabled] = useState(false);

	const handleNewTodo = (e) => {
		const { name, value } = e.target;
		if (name === 'isImportant') {
			setNewTodo((prev) => ({ ...prev, isImportant: !prev.isImportant }));
			return;
		}
		// 입력 폼에서 변경이 발생한 'name'의 값에 따라 객체의 속성 이름을 동적으로 결정한다.
		setNewTodo((prev) => ({ ...prev, [name]: value }));
	};

	const addTodoItem = (e) => {
		e.preventDefault();
		if (newTodo !== '') {
			// 로컬 스토리지에 데이터를 추가하고 업데이트된 데이터를 가져오기
			const updatedList = [...todoList, newTodo];
			localStorage.setItem('todoList', JSON.stringify(updatedList));
			setTodoList(updatedList); // todoList 업데이트
			setNewTodo((prev) => ({
				...prev,
				id: uuid(),
				category: '',
				title: '',
				detail: '',
				isImportant: false,
			}));
			setDisabled(false);
		}
	};

	useEffect(() => {
		if (!localStorage.getItem('todoList')) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			// 새로고침해도 로컬스토리지 데이터 보이기 위해선, 저장해야 함 ! (핵심)
			const todos = JSON.parse(localStorage.getItem('todoList'));
			setTodoList(todos);
		}
	}, []);

	useEffect(() => {
		if (
			newTodo.category !== '' &&
			newTodo.title &&
			newTodo.title.trim() !== ''
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [newTodo]);

	return (
		<>
			<Layout>
				<S.Wrapper>
					<Header>New Wiki-Todo</Header>
					<form onSubmit={addTodoItem}>
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
					</form>
				</S.Wrapper>
			</Layout>
		</>
	);
}
