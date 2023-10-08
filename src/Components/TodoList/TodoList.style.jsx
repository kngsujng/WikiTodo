import { styled } from 'styled-components';

export const Wrapper = styled.section`
	margin-bottom: 20px;
	width: 75%;
	height: 60%;
	display: flex;
	flex-direction: column;
	ul {
		border-top: 2px solid #f1f1f1;
		overflow: auto;
	}
	li {
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
		input {
			margin-right: 10px;
			cursor: pointer;
		}
	}
	div {
		&.todoItemWrap {
			display: flex;
			align-items: center;
		}
	}
`;
