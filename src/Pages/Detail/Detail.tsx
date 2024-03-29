import * as S from './Detail.style';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegSquare, FaSquareCheck } from 'react-icons/fa6';
import { BiSolidEdit } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import TodoHead from '../../Components/TodoHead/TodoHead';
import { useTodos } from '../../Context/TodoContext';
import { TodoItem, Category } from '../../Model/todo';
import useTitle from '../../Hooks/useTitle';

export default function Detail() {
	useTitle('WikiTodo | 상세보기');
	const { id } = useParams();
	const navigate = useNavigate();
	const { todos } = useTodos();
	const todoItem: TodoItem = todos.find(
		(v: TodoItem) => v.id === id
	) as TodoItem;
	const { date, category, title, detail, isCompleted, isImportant } = todoItem;

	return (
		<Layout>
			<TodoHead>Your WikiTodo</TodoHead>
			<S.Container>
				<S.Date>{date}</S.Date>
				<S.Category $category={category as Category}>{category}</S.Category>
				<div className="contents-line">
					<S.Title>{title}</S.Title>
					<button
						onClick={() => {
							navigate(`/edit/${id}`, {
								state: { todos },
							});
						}}
					>
						<BiSolidEdit />
					</button>
				</div>
				{detail ? (
					<S.Detail>{detail}</S.Detail>
				) : (
					<S.Detail>
						<p>세부 내용이 없습니다.</p>
					</S.Detail>
				)}

				<S.IsWrapper $completed={isCompleted}>
					<span>
						{isImportant ? <FaStar color="#FFBD51" /> : <FaRegStar />}
					</span>
					<span className="icon_completed">
						{isCompleted ? <FaSquareCheck /> : <FaRegSquare />}
					</span>
				</S.IsWrapper>
			</S.Container>
		</Layout>
	);
}
