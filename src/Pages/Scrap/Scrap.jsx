import { useEffect, useState } from 'react';
import * as S from './Scrap.style';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoItem from '../../Components/TodoItem/TodoItem';
import Loading from '../../Components/Loading/Loading';
import { useTodos } from '../../Context/TodoContext';
import NoTodoItem from '../../Components/NoTodoItem/NoTodoItem';

export default function Scrap() {
	const { todos, isLoading } = useTodos();
	const [sortedTodos, setSortedTodos] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setSortedTodos(todos.filter((todo) => todo.isImportant));
	}, [todos]);

	const handleSortScrap = (e) => {
		const { value } = e.target;
		setSortedTodos(sortByOption(todos, value));
		if (value === 'by_caregory') {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const handleSortScrapByCategory = (e) => {
		const { value } = e.target;
		setSortedTodos(
			value === 'all'
				? filterImportantTodos(todos)
				: filterByCategory(filterImportantTodos(todos), value)
		);
	};

	return (
		<Layout>
			<TodoHead>⭐️ Important Todo List</TodoHead>
			<S.Wrapper>
				<S.SelectWrapper>
					<S.Select
						id="sortByOption"
						name="sortByOption"
						onChange={handleSortScrap}
					>
						<option defaultValue="sort">정렬 기준</option>
						<option value="by_latestDate">최신 날짜순</option>
						<option value="by_caregory">카테고리별</option>
						<option value="by_isCompleted">완료 여부</option>
					</S.Select>
					{isVisible && (
						<S.Select
							id="sortByCategory"
							name="sortByCategory"
							onChange={handleSortScrapByCategory}
						>
							<option value="all">---</option>
							<option value="work">👩🏻‍💻 업무</option>
							<option value="study">📚 공부</option>
							<option value="exercise">👟 운동</option>
							<option value="plan">🤝 약속</option>
							<option value="etc">🎵 기타</option>
						</S.Select>
					)}
				</S.SelectWrapper>
				<ul>
					{isLoading ? (
						<Loading useLayout={false} />
					) : sortedTodos.length > 0 ? (
						sortedTodos.map((todo) => (
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
		</Layout>
	);
}

const filterImportantTodos = (todoList) =>
	todoList.filter((todo) => todo.isImportant);

const sortByOption = (todoList, sortOption) => {
	const importantTodos = filterImportantTodos(todoList);

	switch (sortOption) {
		case 'by_latestDate':
			return importantTodos.sort((a, b) => new Date(b.date) - new Date(a.date));
		case 'by_isCompleted':
			return importantTodos.sort((a, b) => b.isCompleted - a.isCompleted);
		default:
			return importantTodos;
	}
};

const filterByCategory = (todoList, category) =>
	filterImportantTodos(todoList).filter((todo) => todo.category === category);
