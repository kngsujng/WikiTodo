import { styled } from 'styled-components';

export const Wrapper = styled.section`
	width: 75%;
	height: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;
	ul {
		border-top: 2px solid ${({ theme }) => theme.inpColor};
	}
	li {
		font-size: 0.9rem;
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
		label {
			margin-right: 10px;
			cursor: pointer;
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
			justify-content: center;
			align-items: center;
		}
	}
	input[type='checkbox'] {
		margin: 0 10px 0 0;
		cursor: pointer;
	}
	input[type='text'] {
		margin-right: 10px;
		background-color: transparent;
		outline: none;
	}
	div.btnwrap {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;
	}
	button.btn_delete,
	button.btn_edit,
	button.btn_editConfirm,
	button.btn_editCancel {
		font-size: 0.9rem;
		transition: all 150ms ease-out;
		&:hover {
			transform: rotate(15deg) scale(1.2);
			color: ${({ theme }) => theme.activeBtnColor};
		}
	}
	button.btn_edit {
		font-size: 1rem;
	}
	button.btn_editConfirm,
	button.btn_editCancel {
		font-size: 1.1rem;
	}
`;
