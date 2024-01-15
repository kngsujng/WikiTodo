import React, { useState } from 'react';
import TodoList from '../../Components/TodoList/TodoList';
import TodoHead from '../../Components/TodoHead/TodoHead';
import Layout from '../../Components/Layout/Layout';
import Button from '../../Components/Button/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { useTodos } from '../../Context/TodoContext';
import { ProgressFilter, ProgressFilters } from '../../Model/todo';
import useTitle from '../../Hooks/useTitle';

const filters: ProgressFilters = ['all', 'progressing', 'completed'];

export default function Main() {
	useTitle('WikiTodo | 홈');
	const { isLoading } = useTodos();
	const navigate = useNavigate();
	const [filter, setFilter] = useState<ProgressFilter>(filters[0]);
	return (
		<>
			{isLoading ? (
				<Loading useLayout={true} />
			) : (
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
			)}
		</>
	);
}
