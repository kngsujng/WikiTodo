import { createContext, useContext, useEffect, useReducer } from 'react';
import { getTodos } from '../Api/firebase';
import { useAuthContext } from './AuthContext';

const initialTodos = [];

// reducer 함수 생성
function todoReducer(state, action) {
	switch (action.type) {
		case 'SET':
			return action.todos || [];
		case 'CREATE':
			if (!action.user) {
				const localTodos = JSON.parse(localStorage.getItem('todoList')) || [];
				const updatedLocalTodos = [action.todo, ...localTodos];
				const isDuplicate = localTodos.some(
					(todo) => todo.id === action.todo.id
				);
				if (!isDuplicate) {
					localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
					return updatedLocalTodos;
				} else {
					return localTodos;
				}
			} else {
				return state.concat(action.todo);
			}
		case 'UPDATE':
			if (!action.user) {
				const localTodos = JSON.parse(localStorage.getItem('todoList')) || [];
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
						return action.todo;
					}
					return todo;
				});
			}
		case 'TOGGLE':
			return state.map((todo) => {
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
		case 'DELETE':
			return state.filter((todo) => todo.id !== action.id);
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const TodoContext = createContext();

// context API + reducer 사용
export function TodoProvider({ children }) {
	const { user } = useAuthContext();
	const [todos, dispatch] = useReducer(todoReducer, []);
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user) {
					const firebaseTodos = await getTodos();
					dispatch({ type: 'SET', todos: firebaseTodos });
				} else {
					const localTodos = JSON.parse(localStorage.getItem('todoList')) || [];
					dispatch({ type: 'SET', todos: localTodos });
				}
			} catch (error) {
				console.error('Error fetching todos:', error);
			}
		};

		fetchData();
	}, [user]);

	return (
		<TodoContext.Provider value={{ todos, dispatch }}>
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
