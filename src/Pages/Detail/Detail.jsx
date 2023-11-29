import React, { useState } from 'react';
import * as S from './Detail.style';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegSquare, FaRegSquareCheck } from 'react-icons/fa6';
import { BiSolidEdit } from 'react-icons/bi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';

export default function Detail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		state: { todoList },
	} = useLocation();
	const [todoItem] = useState(todoList.find((v) => v.id === id));
	return (
		<Layout>
			<Header>Your WikiTodo</Header>
			<S.Container>
				<S.Date>{todoItem.date}</S.Date>
				<S.Category category={todoItem.category}>
					{todoItem.category}
				</S.Category>
				<div className="contents-line">
					<S.Title>{todoItem.title}</S.Title>
					<button
						onClick={() => {
							navigate(`/edit/${id}`, {
								state: { todoList },
							});
						}}
					>
						<BiSolidEdit />
					</button>
				</div>
				{todoItem.detail ? (
					<S.Detail>{todoItem.detail}</S.Detail>
				) : (
					<S.Detail>
						<p>세부 내용이 없습니다.</p>
					</S.Detail>
				)}

				<S.IsWrapper>
					<span>
						{todoItem.isImportant ? <FaStar color="#FFBD51" /> : <FaRegStar />}
					</span>
					<span>
						{todoItem.isCompleted ? <FaRegSquareCheck /> : <FaRegSquare />}
					</span>
				</S.IsWrapper>
			</S.Container>
		</Layout>
	);
}
