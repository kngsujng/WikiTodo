import * as S from './TodoList.style';

import { FaRegTrashAlt } from 'react-icons/fa';

export default function TodoList({ filter, todoList, setTodoList }) {
	const filtered = getFilteredItems(todoList, filter);
	return (
		<>
			<S.Wrapper>
				<ul>
					{filtered.map((v) => (
						<li key={v.id}>
							<div className="todoItemWrap">
								<input
									id={v.id}
									type="checkbox"
									value={v.content}
									checked={v.completed}
									onChange={() => {
										// 체크하면 로컬스토리지에 반영되기
										// 1. 체크표시하면 -> 해당 id를 찾아서 해당 todolist의 completed를 바꿔주고
										// 2. 로컬스토리지 todoList에 반영하기
										const oldTodos = JSON.parse(
											localStorage.getItem('todoList')
										);
										const todoToUpdate = oldTodos.find(
											(oldTodo) => oldTodo.id === v.id
										);
										todoToUpdate.completed = !todoToUpdate.completed;
										const newTodos = oldTodos.map((todo) => {
											if (todo.id === v.id) {
												return todoToUpdate;
											} else {
												return todo;
											}
										});
										localStorage.setItem('todoList', JSON.stringify(newTodos));
										setTodoList(newTodos);
									}}
								/>
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
							</div>
							<span className="wrap_delete">
								<button
									className="btn_delete"
									onClick={() => {
										// 로컬스토리지에서 제거
										const todos = JSON.parse(localStorage.getItem('todoList'));
										const newTodos = todos.filter((todo) => todo.id !== v.id);
										localStorage.setItem('todoList', JSON.stringify(newTodos));
										setTodoList(newTodos);
									}}
								>
									<FaRegTrashAlt />
								</button>
							</span>
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
