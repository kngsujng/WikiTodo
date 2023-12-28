import React from 'react';
import * as S from './TodoItem.style';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegSquare, FaSquareCheck } from 'react-icons/fa6';
import { BiSolidEdit } from 'react-icons/bi';
import { useTodos } from '../../Context/TodoContext';

export default function TodoItem({ todo }) {
	const [todoList, dispatch] = useTodos();
	const { id, date, category, title, detail, isCompleted, isImportant } = todo;
	const navigate = useNavigate();

	const toggleStatus = (id, statusType) => {
		dispatch({ type: 'TOGGLE', id, statusType });
	};
	const handleDelete = (id) => {
		dispatch({ type: 'DELETE', id });
	};
	return (
		<S.Wrapper
			key={id}
			onClick={() =>
				navigate(`/detail/${id}`, {
					state: { todoList },
				})
			}
		>
			<div className="todoItemWrap">
				<div className="leftcss">
					<div className="contents-line">
						<S.Title
							htmlFor={id}
							$completed={isCompleted}
						>
							{title}
						</S.Title>
						<button
							className="btn_important"
							onClick={(e) => {
								e.stopPropagation();
								toggleStatus(id, 'important');
							}}
						>
							{isImportant ? <FaStar color="#FFBD51" /> : <FaRegStar />}
						</button>
					</div>
					<S.Detail $completed={isCompleted}>{detail}</S.Detail>
					<div className="contents-line">
						<S.Date $completed={isCompleted}>{date}</S.Date>
						<S.Category
							$category={category}
							$completed={isCompleted}
						>
							{category}
						</S.Category>
					</div>
				</div>
				<S.BtnWrapper $completed={isCompleted}>
					<button
						className="btn_completed"
						onClick={(e) => {
							e.stopPropagation();
							toggleStatus(id, 'completed');
						}}
					>
						{isCompleted ? <FaSquareCheck /> : <FaRegSquare />}
					</button>
					<button
						className="btn_gotoEdit"
						onClick={(e) => {
							e.stopPropagation();
							navigate(`/edit/${id}`, {
								state: { todoList },
							});
						}}
					>
						<BiSolidEdit />
					</button>
					<button
						className="btn_delete"
						onClick={(e) => {
							e.stopPropagation();
							handleDelete(id);
						}}
					>
						<FaRegTrashAlt />
					</button>
				</S.BtnWrapper>
			</div>
		</S.Wrapper>
	);
}
