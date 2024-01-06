import * as S from './TodoList.style';
import TodoItem from '../TodoItem/TodoItem';
import { useTodos } from '../../Context/TodoContext';
import NoTodoItem from '../NoTodoItem/NoTodoItem';

export default function TodoList({ filter }) {
	const { todos } = useTodos();
	const filtered = getFilteredItems(todos, filter);
	return (
		<>
			<S.Wrapper>
				<ul>
					{filtered.length > 0 ? (
						filtered.map((todo) => (
							<TodoItem
								key={todo.id}
								id={todo.id}
							/>
						))
					) : (
						<NoTodoItem />
					)}
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
