import * as S from './TodoList.style';

import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';

export default function TodoList({ filter, todoList, setTodoList }) {
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
						<li key={v.id}>
							<div className="todoItemWrap">
								<div className="leftcss">
									<input
										id={v.id}
										type="checkbox"
										checked={v.isCompleted}
										onChange={() => toggleStatus(v.id, 'completed')}
									/>
									<div className="contents">
										<div className="contents-firstLine">
											<S.Title
												htmlFor={v.id}
												isCompleted={v.isCompleted}
											>
												{v.title}
											</S.Title>
											<S.Category category={v.category}>
												{v.category}
											</S.Category>
										</div>
										<p className="date">{v.date}</p>
									</div>
								</div>
								<div className="rightcss">
									<button
										className="btn_important"
										onClick={() => toggleStatus(v.id, 'important')}
									>
										{v.isImportant ? <FaStar /> : <FaRegStar />}
									</button>
									<button
										className="btn_delete"
										onClick={() => handleDelete(v.id)}
									>
										<FaRegTrashAlt />
									</button>
								</div>
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
