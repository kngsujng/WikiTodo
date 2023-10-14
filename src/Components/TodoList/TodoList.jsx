import { useState } from 'react';
import * as S from './TodoList.style';

import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';

export default function TodoList({ filter, todoList, setTodoList }) {
	const filtered = getFilteredItems(todoList, filter);
	const [editingId, setEditingId] = useState(null);
	const [updatedText, setUpdatedText] = useState('');
	const onCompleted = (id) => {
		// 체크하면 로컬스토리지에 반영되기
		// 1. 체크표시하면 -> 해당 id를 찾아서 해당 todolist의 completed를 바꿔주고
		// 2. 로컬스토리지 todoList에 반영하기
		const oldTodos = JSON.parse(localStorage.getItem('todoList'));
		const todoToUpdate = oldTodos.find((oldTodo) => oldTodo.id === id);
		todoToUpdate.completed = !todoToUpdate.completed;
		const newTodos = oldTodos.map((todo) => {
			if (todo.id === id) {
				return todoToUpdate;
			} else {
				return todo;
			}
		});
		localStorage.setItem('todoList', JSON.stringify(newTodos));
		setTodoList(newTodos);
	};
	const onDelete = (id) => {
		// 로컬스토리지에서 제거
		const todos = JSON.parse(localStorage.getItem('todoList'));
		const newTodos = todos.filter((todo) => todo.id !== id);
		localStorage.setItem('todoList', JSON.stringify(newTodos));
		setTodoList(newTodos);
	};
	const handleEditTodo = (e) => {
		setUpdatedText(e.target.value);
	};
	const onClickEdit = (id) => {
		setEditingId(id);
	};
	const onEditConfirm = (id) => {
		setEditingId(null);
		if (updatedText.trim() !== '') {
			const todos = JSON.parse(localStorage.getItem('todoList'));
			const todoToUpdate = todos.find((todo) => todo.id === id);
			todoToUpdate.content = updatedText;
			todos.map((todo) => {
				if (todo.id === id) {
					return todoToUpdate;
				} else {
					return todo;
				}
			});
			localStorage.setItem('todoList', JSON.stringify(todos));
			setTodoList(todos);
			setUpdatedText('');
		}
		return;
	};
	const onEditCancel = () => {
		setEditingId(null);
	};
	return (
		<>
			<S.Wrapper>
				<ul>
					{filtered.map((v) => (
						<li key={v.id}>
							<div className="todoItemWrap">
								<div className="leftcss">
									<input
										id={v.id}
										type="checkbox"
										value={v.content}
										checked={v.completed}
										onChange={() => onCompleted(v.id)}
									/>

									{editingId === v.id ? (
										<input
											type="text"
											value={updatedText}
											onChange={handleEditTodo}
										/>
									) : (
										<label
											htmlFor={v.id}
											style={
												v.completed
													? {
															color: '#bdbdbd',
															textDecoration: 'line-through',
													  }
													: null
											}
										>
											{v.content}
										</label>
									)}
								</div>
								{editingId === v.id ? (
									<div className="btnwrap">
										<button
											className="btn_editConfirm"
											onClick={() => {
												onEditConfirm(v.id);
											}}
										>
											<FiCheck />
										</button>
										<button
											className="btn_editCancel"
											onClick={() => {
												onEditCancel();
											}}
										>
											<MdOutlineCancel />
										</button>
									</div>
								) : (
									<div className="btnwrap">
										<button
											className="btn_edit"
											onClick={() => onClickEdit(v.id)}
										>
											<FaRegEdit />
										</button>
										<button
											className="btn_delete"
											onClick={() => onDelete(v.id)}
										>
											<FaRegTrashAlt />
										</button>
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</S.Wrapper>
		</>
	);
}

function getFilteredItems(todoList, filter) {
	if (filter === 'all') {
		return todoList;
	}
	if (filter === 'progressing') {
		return todoList.filter((todo) => !todo.completed);
	}
	if (filter === 'completed') {
		return todoList.filter((todo) => todo.completed);
	}
}
