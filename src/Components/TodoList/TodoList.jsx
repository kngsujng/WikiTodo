import * as S from './TodoList.style';
import TodoItem from '../TodoItem/TodoItem';
import { useTodos } from '../../Context/TodoContext';

export default function TodoList({ filter }) {
	const [todoList] = useTodos();
	const filtered = getFilteredItems(todoList, filter);
	return (
		<>
			<S.Wrapper>
				<ul>
					{filtered.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
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
