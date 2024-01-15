import {
	Dispatch,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { addNewTodo, deleteTodo, editTodo, getTodos } from '../Api/firebase';
import { useAuthContext } from './AuthContext';
import { TodoItem, TodoList } from '../Model/todo';
import { User, UserId } from '../Model/auth';

type State = TodoList | [];

type Action =
	| { type: 'SET'; todos: TodoList | [] }
	| { type: 'CREATE'; todo: TodoItem; user: User | null; uid: UserId }
	| {
			type: 'UPDATE';
			todo: TodoItem;
			id: string;
			user: User | null;
			uid: UserId;
	  }
	| {
			type: 'TOGGLE';
			id: string;
			statusType: 'completed' | 'important';
			user: User | null;
			uid: UserId;
	  }
	| {
			type: 'DELETE';
			id: string;
			todo: TodoItem;
			user: User | null;
			uid: UserId;
	  };

type TodoContextType = {
	todos: TodoList | [];
	dispatch: Dispatch<Action>;
	isLoading: boolean;
};

// reducer 함수 생성
const todoReducer = (state: State, action: Action) => {
	const storedTodos = localStorage.getItem('todoList');
	const localTodos: TodoList = storedTodos ? JSON.parse(storedTodos) : [];
	switch (action.type) {
		case 'SET':
			return action.todos;
		case 'CREATE':
			if (!action.user) {
				const isDuplicate = localTodos.some(
					(todo: TodoItem) => action.todo && todo.id === action.todo.id
				);
				const updatedLocalTodos = [action.todo, ...localTodos];
				if (!isDuplicate) {
					localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
					return updatedLocalTodos;
				} else {
					return localTodos;
				}
			} else {
				if (action.uid && action.todo) {
					addNewTodo(action.uid, action.todo);
				}
				return [action.todo, ...state];
			}
		case 'UPDATE':
			if (!action.user) {
				const updatedLocalTodos = localTodos.map((todo: TodoItem) => {
					if (todo.id === action.id) {
						return action.todo;
					} else {
						return todo;
					}
				});
				localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
				return updatedLocalTodos;
			} else {
				return state.map((todo: TodoItem) => {
					if (action.uid && action.todo && action.id === todo.id) {
						editTodo(action.uid, action.todo);
						return action.todo;
					}
					return todo;
				});
			}
		case 'TOGGLE':
			if (!action.user) {
				const updatedTodos = state.map((todo: TodoItem) => {
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
				return state.map((todo: TodoItem) => {
					if (action.id === todo.id) {
						if (action.uid && action.statusType === 'completed') {
							const toggledTodo = {
								...todo,
								isCompleted: !todo.isCompleted,
							};
							editTodo(action.uid, toggledTodo);
							return toggledTodo;
						}
						if (action.uid && action.statusType === 'important') {
							const toggledTodo = {
								...todo,
								isImportant: !todo.isImportant,
							};
							editTodo(action.uid, toggledTodo);
							return toggledTodo;
						}
					}
					return todo;
				});
			}
		case 'DELETE':
			if (!action.user) {
				const updatedLocalTodos = localTodos.filter(
					(todo: TodoItem) => todo.id !== action.id
				);
				localStorage.setItem('todoList', JSON.stringify(updatedLocalTodos));
				return updatedLocalTodos;
			} else {
				action.uid && action.todo && deleteTodo(action.uid, action.todo);
				return state.filter((todo: TodoItem) => todo.id !== action.id);
			}
		default:
			return state;
	}
};

const TodoContext = createContext<TodoContextType | null>(null);

// context API + reducer 사용
const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const { user, uid } = useAuthContext();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [todos, dispatch] = useReducer(todoReducer, []);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				if (user) {
					const firebaseTodos = await getTodos(uid);
					dispatch({ type: 'SET', todos: firebaseTodos });
				}
				if (!user) {
					const storedTodos = localStorage.getItem('todoList');
					const localTodos: TodoList = storedTodos
						? JSON.parse(storedTodos)
						: [];
					dispatch({ type: 'SET', todos: localTodos });
				}
			} catch (error) {
				console.error('Error fetching todos:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [user, uid]);

	return (
		<TodoContext.Provider value={{ todos, dispatch, isLoading }}>
			{children}
		</TodoContext.Provider>
	);
};

// 커스텀 Hooks
export const useTodos = () => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error('Cannon find TodoProvider');
	}
	return context;
};

export default TodoProvider;
