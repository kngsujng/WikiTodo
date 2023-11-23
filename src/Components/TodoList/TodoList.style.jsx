import { styled } from 'styled-components';

export const Wrapper = styled.section`
	width: 75%;
	height: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;
	li {
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
		&:first-child {
			margin-top: 0.5rem;
		}
		&:hover {
			background-color: ${({ theme }) => theme.hoverColor};
		}
	}
	div {
		&.todoItemWrap {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
		&.leftcss {
			display: flex;
			width: 85%;
		}
		&.contents {
			width: 100%;
		}
		&.contents-firstLine {
			display: flex;
			gap: 15px;
		}
	}
	input[type='checkbox'] {
		margin: 0 10px 0 0;
	}
	p.date {
		margin-top: 5px;
		color: ${({ theme }) => theme.dateColor};
		font-size: 14px;
	}
	button {
		font-size: 1rem;
		&.btn_delete {
			margin-left: 4px;
			transition: all 150ms ease-out;
			/* &:hover {
				transform: rotate(15deg) scale(1.2);
			} */
		}
		&.btn_important {
			transition: all 150ms ease-out;
		}
		&:hover {
			color: ${({ theme }) => theme.activeBtnColor};
		}
	}
`;

const getCategoryBackgroundColor = (category) => {
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

export const Category = styled.span`
	padding: 3px 8px;
	border-radius: 10px;
	background-color: ${({ category }) => getCategoryBackgroundColor(category)};
	font-size: 12px;
`;

export const Title = styled.label`
	display: inline-block;
	max-width: 70%;
	font-size: 16px;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${({ isCompleted }) => isCompleted && '#bdbdbd'};
	text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};
`;
