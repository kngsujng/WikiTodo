import * as S from './TodoList.style';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ filter, todoList, setTodoList }) {
	const filtered = getFilteredItems(todoList, filter);
	return (
		<>
			<S.Wrapper>
				<ul>
					{filtered.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							todoList={todoList}
							setTodoList={setTodoList}
						/>
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
