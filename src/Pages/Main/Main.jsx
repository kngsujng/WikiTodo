import React, { useState } from 'react';
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

	return (
		<Layout>
			<Header
				filters={filters}
				filter={filter}
				onFilterChange={setFilter}
			>
				Todo List
			</Header>
			<TodoList filter={filter} />
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
		</Layout>
	);
}
