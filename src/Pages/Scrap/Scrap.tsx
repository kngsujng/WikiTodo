import { useEffect, useState } from 'react';
import * as S from './Scrap.style';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoItem from '../../Components/TodoItem/TodoItem';
import Loading from '../../Components/Loading/Loading';
import { useTodos } from '../../Context/TodoContext';
import NoTodoItem from '../../Components/NoTodoItem/NoTodoItem';
import {
	Category,
	TodoItem as TodoItemType,
	TodoList as TodoListType,
	scrapSortOption,
} from '../../Model/todo';

export default function Scrap() {
	const { todos, isLoading } = useTodos();
	const [sortedTodos, setSortedTodos] = useState<TodoListType>([]);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		setSortedTodos(todos.filter((todo) => todo.isImportant));
	}, [todos]);

	const handleSortScrap = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		const categoryOption = value as scrapSortOption;
		setSortedTodos(sortByOption(todos, categoryOption));
		if (value === 'by_caregory') {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const handleSortScrapByCategory = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const { value } = e.target;
		const categorySortOption = value as Category;
		setSortedTodos(
			value === '카테고리 (필수)'
				? filterImportantTodos(todos)
				: filterByCategory(filterImportantTodos(todos), categorySortOption)
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
							<option value="카테고리 (필수)">---</option>
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

const filterImportantTodos = (todoList: TodoListType) =>
	todoList.filter((todo: TodoItemType) => todo.isImportant);

const sortByOption = (todoList: TodoListType, sortOption: scrapSortOption) => {
	const importantTodos = filterImportantTodos(todoList);

	switch (sortOption) {
		case 'by_latestDate':
			return importantTodos.sort((a, b) => {
				const dateA = new Date(a.date).getTime();
				const dateB = new Date(b.date).getTime();
				return dateB - dateA;
			});
		case 'by_isCompleted':
			return importantTodos.sort((a, b) => {
				return b.isCompleted ? 1 : -1;
			});
		default:
			return importantTodos;
	}
};

const filterByCategory = (todoList: TodoListType, category: Category) =>
	filterImportantTodos(todoList).filter((todo) => todo.category === category);
