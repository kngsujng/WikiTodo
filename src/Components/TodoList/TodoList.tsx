import * as S from './TodoList.style';
import TodoItem from '../TodoItem/TodoItem';
import { useTodos } from '../../Context/TodoContext';
import NoTodoItem from '../NoTodoItem/NoTodoItem';
import { ProgressFilter, TodoList as TodoListType } from './../../Model/todo';

const TodoList: React.FC<{ filter: ProgressFilter }> = ({ filter }) => {
	const { todos } = useTodos();
	const filtered: TodoListType = getFilteredItems(todos, filter);
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
};

function getFilteredItems(
	todoList: TodoListType,
	filter: ProgressFilter
): TodoListType {
	if (filter === 'all') {
		return todoList;
	}
	if (filter === 'progressing') {
		return todoList.filter((todo) => !todo.isCompleted);
	}
	if (filter === 'completed') {
		return todoList.filter((todo) => todo.isCompleted);
	}
	return todoList;
}

export default TodoList;
