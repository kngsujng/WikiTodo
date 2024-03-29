import styled from 'styled-components';
import { Category as CategoryType } from '../../Model/todo';

const getCategoryBackgroundColor = (category: CategoryType) => {
	switch (category) {
		case 'work':
			return '#C3BDF3';
		case 'study':
			return '#D4EEB9';
		case 'exercise':
			return '#A4E2E8';
		case 'plan':
			return '#FBC9DC';
		case 'etc':
			return '#FCE8A7';
		default:
			return 'transparent';
	}
};

export const Wrapper = styled.li`
	font-size: 1rem;
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.todoListColor};
	border-radius: 15px;
	color: ${({ theme }) => theme.txtColor};
	cursor: pointer;
	&:first-child {
		margin-top: 0.5rem;
	}
	&:hover {
		background-color: ${({ theme }) => theme.hoverColor};
	}
	div {
		&.todoItemWrap {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
		&.leftcss {
			width: 80%;
		}
		&.contents-line {
			display: flex;
			align-items: center;
			gap: 5px;
			button.btn_important {
				font-size: 1rem;
				transition: all 150ms ease-out;
				color: ${({ theme }) => theme.txtColor};
				&:hover {
					color: ${({ theme }) => theme.activeBtnColor};
				}
			}
		}
	}
`;

export const Category = styled.span<{
	$category: CategoryType;
	$completed: boolean;
}>`
	padding: 3px 8px;
	border-radius: 10px;
	background-color: ${({ $category }) => getCategoryBackgroundColor($category)};
	opacity: ${({ $completed }) => ($completed ? 0.5 : 1)};
	font-size: 12px;
	color: ${({ $completed, theme }) =>
		$completed ? theme.placeholderColor : theme.dateColor};
`;

export const Title = styled.p<{ $completed: boolean }>`
	display: inline-block;
	max-width: 85%;
	font-size: 16px;
	line-height: 20px;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${({ $completed, theme }) =>
		$completed ? theme.grayTxtColor : theme.txtColor};
	text-decoration: ${({ $completed }) => $completed && 'line-through'};
`;

export const Detail = styled.p<{ $completed: boolean }>`
	max-width: 85%;
	font-size: 14px;
	line-height: 18px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: ${({ $completed, theme }) =>
		$completed ? theme.grayTxtColor : theme.txtColor};
	text-decoration: ${({ $completed }) => $completed && 'line-through'};
`;

export const Date = styled.p<{ $completed: boolean }>`
	color: ${({ $completed, theme }) =>
		$completed ? theme.grayTxtColor : theme.dateColor};
	font-size: 13px;
`;

export const BtnWrapper = styled.div<{ $completed: boolean }>`
	button {
		color: ${({ theme }) => theme.txtColor};
		font-size: 1.1rem;
		&.btn_completed,
		&.btn_gotoEdit,
		&.btn_delete {
			transition: all 150ms ease-out;
		}
		&.btn_completed {
			color: ${({ $completed, theme }) =>
				$completed ? theme.completedColor : theme.txtColor};
		}
		&.btn_gotoEdit {
			margin: 0 4px;
		}
		&:hover {
			color: ${({ theme }) => theme.activeBtnColor};
		}
	}
`;
