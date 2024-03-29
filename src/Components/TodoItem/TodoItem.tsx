import * as S from './TodoItem.style';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegSquare, FaSquareCheck } from 'react-icons/fa6';
import { BiSolidEdit } from 'react-icons/bi';
import { useTodos } from '../../Context/TodoContext';
import { useAuthContext } from '../../Context/AuthContext';
import useScrap from '../../Hooks/useScrap';
import { TodoItem as TodoItemType, ToggleType } from '../../Model/todo';

const TodoItem: React.FC<{ id: string }> = ({ id }) => {
	const { user, uid } = useAuthContext();
	const { addOrUpdateItem, removeItem } = useScrap();
	const { todos, dispatch } = useTodos();
	const todo = todos.find((v: TodoItemType) => v.id === id);
	const navigate = useNavigate();
	if (!todo) {
		return null;
	}
	const {
		date,
		category,
		title,
		detail,
		isCompleted,
		isImportant,
	}: TodoItemType = todo;

	const toggleStatus = (id: string, statusType: ToggleType): void => {
		dispatch({ type: 'TOGGLE', id, statusType, user, uid });
		if (statusType === 'important') {
			if (!todo.isImportant) {
				addOrUpdateItem.mutate({ ...todo, isImportant: !todo.isImportant });
			} else {
				removeItem.mutate(id);
			}
		}
	};
	const handleDelete = (id: string) => {
		dispatch({ type: 'DELETE', id, user, uid, todo });
		removeItem.mutate(id);
	};
	return (
		<S.Wrapper
			// key={id}
			onClick={() =>
				navigate(`/detail/${id}`, {
					state: { todos },
				})
			}
		>
			<div className="todoItemWrap">
				<div className="leftcss">
					<div className="contents-line">
						<S.Title $completed={isCompleted}>{title}</S.Title>
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
								state: { todos },
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
};
export default TodoItem;
