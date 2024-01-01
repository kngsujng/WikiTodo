import React, { useState } from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import TodoHead from '../../Components/TodoHead/TodoHead';
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
			<TodoHead
				filters={filters}
				filter={filter}
				onFilterChange={setFilter}
			>
				Todo List
			</TodoHead>
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
