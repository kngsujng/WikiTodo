import styled from 'styled-components';

export const GotoNewpageBtn = styled.button`
	position: absolute;
	bottom: 2rem;
	right: 2rem;
	padding: 1.2rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.activeBtnColor};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const AddTodoBtn = styled.button`
	width: 50%;
	margin: 0 auto;
	padding: 10px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.activeBtnColor};
	color: #ffffff;
	font-size: 18px;
	&:disabled {
		background-color: ${({ theme }) => theme.disabledBtnColor};
	}
	&:not(:disabled) {
		&:hover {
			box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.shadowColor};
		}
	}
`;