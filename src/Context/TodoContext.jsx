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
			return state.concat(action.todo);
		case 'UPDATE':
			return state.map((todo) => {
				if (action.id === todo.id) {
					return action.todo;
				}
				return todo;
			});
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
	const [todos, dispatch] = useReducer(todoReducer, []);
	const { user } = useAuthContext();
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user) {
					const firebaseTodos = await getTodos();
					dispatch({ type: 'SET', todos: firebaseTodos });
					console.log('마운팅됨');
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
