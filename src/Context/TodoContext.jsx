import { createContext, useContext, useEffect, useReducer } from 'react';

const initialTodos = [];

// reducer 함수 생성
function todoReducer(state, action) {
	// action 객체 : type, todo
	// state에 todo-list 들어갈 것
	switch (action.type) {
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

// const { id, date, category, title, detail, isCompleted, isImportant } = todo;

const TodoContext = createContext();

// context API + reducer 사용
export function TodoProvider({ children }) {
	const storedTodos =
		JSON.parse(localStorage.getItem('todoList')) || initialTodos;
	const todos = useReducer(todoReducer, storedTodos);
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todos[0]));
	}, [todos]);

	return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
}

// 커스텀 Hooks
export function useTodos() {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error('Cannon find TodoProvider');
	}
	return context;
}
