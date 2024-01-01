import React, { useEffect, useState } from 'react';
import * as S from './Scrap.style';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import TodoItem from '../../Components/TodoItem/TodoItem';

export default function Scrap() {
	const [todoList, setTodoList] = useState([]);
	const handleSortScrap = (e) => {
		const { value } = e.target;
		console.log(value);
	};
	const handleSortScrapByCategory = (e) => {
		const { value } = e.target;
		console.log(value);
	};
	useEffect(() => {
		if (!localStorage.getItem('todoList')) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			const data = JSON.parse(localStorage.getItem('todoList'));
			setTodoList(data);
		}
	}, []);
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
						<option value="by_latestDate">최신 날짜순</option>
						<option value="by_caregory">카테고리별</option>
						<option value="by_isCompleted">완료 여부</option>
					</S.Select>
					<S.Select
						id="sortByCategory"
						name="sortByCategory"
						onChange={handleSortScrapByCategory}
					>
						<option value="work">👩🏻‍💻 업무</option>
						<option value="study">📚 공부</option>
						<option value="exercise">👟 운동</option>
						<option value="plan">🤝 약속</option>
						<option value="etc">🎵 기타</option>
					</S.Select>
				</S.SelectWrapper>
				<ul>
					{todoList.map((todo) => {
						if (todo.isImportant) {
							return (
								<TodoItem
									key={todo.id}
									todo={todo}
									todoList={todoList}
									setTodoList={setTodoList}
								/>
							);
						}
					})}
				</ul>
			</S.Wrapper>
		</Layout>
	);
}

function sortByOption(todoList, sortOption) {
	switch (sortOption) {
		case 'by_latestDate':
			return todoList.sort((a, b) => a.date - b.date);
		case 'by_caregory':
			// return todoList.filter();
			console.log('hi');
			break;
		case 'by_isCompleted':
			return todoList.sort((a, b) => a.isCompleted - b.isCompleted);
		default:
			return todoList.sort((a, b) => a.date - b.date);
	}
}
