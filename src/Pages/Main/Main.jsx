import React, { useEffect, useState } from 'react';
import * as S from './Main.style';
import TodoList from '../../Components/TodoList/TodoList';
import Header from '../../Components/Header/Header';
import Layout from '../../Components/Layout/Layout';
import Button from '../../Components/Button/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const filters = ['all', 'progressing', 'completed'];

export default function Main() {
	const navigate = useNavigate();
	const [filter, setFilter] = useState(filters[0]);
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('todoList')) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			// 새로고침해도 로컬스토리지 데이터 보이기 위해선, 저장해야 함 ! (핵심)
			const data = JSON.parse(localStorage.getItem('todoList'));
			setTodoList(data);
		}
	}, []);

	return (
		<>
			<Layout>
				<S.Wrapper>
					<Header
						filters={filters}
						filter={filter}
						onFilterChange={setFilter}
					>
						Todo List
					</Header>
					<TodoList
						filter={filter}
						todoList={todoList}
						setTodoList={setTodoList}
					/>
					<Button
						text={
							<AiOutlinePlus
								size="30"
								color="#fff"
							/>
						}
						handleClick={() => navigate('/new')}
						isDisabled={false}
					/>
				</S.Wrapper>
			</Layout>
		</>
	);
}
