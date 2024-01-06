import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { addNewTodo, deleteTodo, editTodo, getTodos } from '../Api/firebase';
import { useAuthContext } from './AuthContext';

// reducer 함수 생성
function todoReducer(state, action) {
	const localTodos = JSON.parse(localStorage.getItem('todoList')) || [];
	switch (action.type) {
		case 'SET':
			return action.todos || [];
		case 'CREATE':
			if (!action.user) {
				const isDuplicate = localTodos.some(
					(todo) => todo.id === action.todo.id
				);
				const updatedLocalTodos = [action.todo, ...localTodos];
				if (!isDuplicate) {
					localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
					return updatedLocalTodos;
				} else {
					return localTodos;
				}
			} else {
				addNewTodo(action.todo);
				return [action.todo, ...state];
			}
		case 'UPDATE':
			if (!action.user) {
				const updatedLocalTodos = localTodos.map((todo) => {
					if (todo.id === action.id) {
						return action.todo;
					} else {
						return todo;
					}
				});
				localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
				return updatedLocalTodos;
			} else {
				return state.map((todo) => {
					if (action.id === todo.id) {
						editTodo(action.todo);
						return action.todo;
					}
					return todo;
				});
			}
		case 'TOGGLE':
			if (!action.user) {
				const updatedTodos = state.map((todo) => {
					if (action.id === todo.id) {
						if (action.statusType === 'completed') {
							return {
								...todo,
								isCompleted: !todo.isCompleted,
							};
						}
						if (action.statusType === 'important') {
							return {
								...todo,
								isImportant: !todo.isImportant,
							};
						}
					}
					return todo;
				});
				localStorage.setItem('todoList', JSON.stringify(updatedTodos));
				return updatedTodos;
			} else {
				return state.map((todo) => {
					if (action.id === todo.id) {
						if (action.statusType === 'completed') {
							const toggledTodo = {
								...todo,
								isCompleted: !todo.isCompleted,
							};
							editTodo(toggledTodo);
							return toggledTodo;
						}
						if (action.statusType === 'important') {
							const toggledTodo = {
								...todo,
								isImportant: !todo.isImportant,
							};
							editTodo(toggledTodo);
							return toggledTodo;
						}
					}
					return todo;
				});
			}
		case 'DELETE':
			if (!action.user) {
				const updatedLocalTodos = localTodos.filter(
					(todo) => todo.id !== action.id
				);
				localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
				return updatedLocalTodos;
			} else {
				deleteTodo(action.todo);
				return state.filter((todo) => todo.id !== action.id);
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const TodoContext = createContext();

// context API + reducer 사용
export function TodoProvider({ children }) {
	const { user } = useAuthContext();
	const [isLoading, setIsLoading] = useState(false);
	const [todos, dispatch] = useReducer(todoReducer, []);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				if (user && 'uid' in user) {
					const firebaseTodos = (await getTodos()) || [];
					dispatch({ type: 'SET', todos: firebaseTodos });
				}
				if (localStorage.getItem('user') === 'noAuth') {
					const localStorageTodos =
						JSON.parse(localStorage.getItem('todoList')) || [];
					dispatch({ type: 'SET', todos: localStorageTodos });
				}
			} catch (error) {
				console.error('Error fetching todos:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [user]);

	return (
		<TodoContext.Provider value={{ todos, dispatch, isLoading }}>
			{children}
		</TodoContext.Provider>
	);
}

// 커스텀 Hooks
export function useTodos() {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error('Cannon find TodoProvider');
	}
	return context;
}
