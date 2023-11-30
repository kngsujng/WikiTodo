import { useNavigate } from 'react-router-dom';
import * as S from './TodoList.style';

import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegSquare, FaSquareCheck } from 'react-icons/fa6';
// import { FcCheckmark } from 'react-icons/fc';
import { BiSolidEdit } from 'react-icons/bi';

export default function TodoList({ filter, todoList, setTodoList }) {
	const navigate = useNavigate();
	const filtered = getFilteredItems(todoList, filter);
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
		<>
			<S.Wrapper>
				<ul>
					{filtered.map((v) => (
						<li
							key={v.id}
							onClick={() =>
								navigate(`/detail/${v.id}`, {
									state: { todoList },
								})
							}
						>
							<div className="todoItemWrap">
								<div className="leftcss">
									<div className="contents-line">
										<S.Title
											htmlFor={v.id}
											$completed={v.isCompleted.toString()}
										>
											{v.title}
										</S.Title>
										<button
											className="btn_important"
											onClick={(e) => {
												e.stopPropagation();
												toggleStatus(v.id, 'important');
											}}
										>
											{v.isImportant ? (
												<FaStar color="#FFBD51" />
											) : (
												<FaRegStar />
											)}
										</button>
									</div>
									<S.Detail $completed={v.isCompleted.toString()}>
										{v.detail}
									</S.Detail>
									<div className="contents-line">
										<S.Date $completed={v.isCompleted.toString()}>
											{v.date}
										</S.Date>
										<S.Category
											$category={v.category}
											$completed={v.isCompleted.toString()}
										>
											{v.category}
										</S.Category>
									</div>
								</div>
								<S.BtnWrapper $completed={v.isCompleted.toString()}>
									<button
										className="btn_completed"
										onClick={(e) => {
											e.stopPropagation();
											toggleStatus(v.id, 'completed');
										}}
									>
										{v.isCompleted ? <FaSquareCheck /> : <FaRegSquare />}
									</button>
									<button
										className="btn_gotoEdit"
										onClick={(e) => {
											e.stopPropagation();
											navigate(`/edit/${v.id}`, {
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
											handleDelete(v.id);
										}}
									>
										<FaRegTrashAlt />
									</button>
								</S.BtnWrapper>
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
		return todoList.filter((todo) => !todo.isCompleted);
	}
	if (filter === 'completed') {
		return todoList.filter((todo) => todo.isCompleted);
	}
}
