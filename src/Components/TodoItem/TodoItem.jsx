import React from 'react';
import * as S from './TodoItem.style';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegSquare, FaSquareCheck } from 'react-icons/fa6';
import { BiSolidEdit } from 'react-icons/bi';

export default function TodoItem({ todo, todoList, setTodoList }) {
	const { id, date, category, title, detail, isCompleted, isImportant } = todo;
	const navigate = useNavigate();
	const toggleStatus = (id, statusType) => {
		const oldTodos = JSON.parse(localStorage.getItem('todoList'));
		const todoToUpdate = oldTodos.find((oldTodo) => oldTodo.id === id);
		if (statusType === 'completed') {
			todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
		}
		if (statusType === 'important') {
			todoToUpdate.isImportant = !todoToUpdate.isImportant;
		}
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
	const handleDelete = (id) => {
		const todos = JSON.parse(localStorage.getItem('todoList'));
		const newTodos = todos.filter((todo) => todo.id !== id);
		localStorage.setItem('todoList', JSON.stringify(newTodos));
		setTodoList(newTodos);
	};
	return (
		<S.Wrapper
			key={id}
			onClick={() =>
				navigate(`/detail/${id}`, {
					state: { todoList },
				})
			}
		>
			<div className="todoItemWrap">
				<div className="leftcss">
					<div className="contents-line">
						<S.Title
							htmlFor={id}
							$completed={isCompleted}
						>
							{title}
						</S.Title>
						<button
							className="btn_important"
							onClick={(e) => {
								e.stopPropagation();
								toggleStatus(id, 'important');
							}}
						>
							{isImportant ? <FaStar color="#FFBD51" /> : <FaRegStar />}
						</button>
					</div>
					<S.Detail $completed={isCompleted}>{detail}</S.Detail>
					<div className="contents-line">
						<S.Date $completed={isCompleted}>{date}</S.Date>
						<S.Category
							$category={category}
							$completed={isCompleted}
						>
							{category}
						</S.Category>
					</div>
				</div>
				<S.BtnWrapper $completed={isCompleted}>
					<button
						className="btn_completed"
						onClick={(e) => {
							e.stopPropagation();
							toggleStatus(id, 'completed');
						}}
					>
						{isCompleted ? <FaSquareCheck /> : <FaRegSquare />}
					</button>
					<button
						className="btn_gotoEdit"
						onClick={(e) => {
							e.stopPropagation();
							navigate(`/edit/${id}`, {
								state: { todoList },
							});
						}}
					>
						<BiSolidEdit />
					</button>
					<button
						className="btn_delete"
						onClick={(e) => {
							e.stopPropagation();
							handleDelete(id);
						}}
					>
						<FaRegTrashAlt />
					</button>
				</S.BtnWrapper>
			</div>
		</S.Wrapper>
	);
}
