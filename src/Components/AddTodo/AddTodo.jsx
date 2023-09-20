import * as S from './AddTodo.style';

// 1. input창에 입력한 todo state로 관리 및 저장
// 2. button 클릭시, todos 배열 state에 추가
//		-

export default function AddTodo({
	newTodo,
	setNewTodo,
	todoList,
	setTodoList,
}) {
	return (
		<>
			<S.Wrapper>
				<label htmlFor="inp_todo">Create your WikiTodo</label>
				<input
					type="text"
					placeholder="Input your to-do!"
					id="inp_todo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						let todoItems = [...todoList];
						setTodoList([...todoItems, newTodo]);
						setNewTodo('');
						console.log(todoList);
					}}
				>
					Add Now
				</button>
			</S.Wrapper>
		</>
	);
}
