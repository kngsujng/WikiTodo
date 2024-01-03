import * as S from './TodoList.style';
import TodoItem from '../TodoItem/TodoItem';
import { useTodos } from '../../Context/TodoContext';

export default function TodoList({ filter }) {
	const { todos } = useTodos();
	const filtered = getFilteredItems(todos, filter);
	return (
		<>
			<S.Wrapper>
				<ul>
					{todos &&
						filtered.map((todo) => (
							<TodoItem
								key={todo.id}
								id={todo.id}
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
