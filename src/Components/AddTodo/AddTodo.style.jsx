import { styled } from 'styled-components';

export const Wrapper = styled.form`
	width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${({ theme }) => theme.txtColor};
	label {
		font-weight: 600;
		font-size: 18px;
	}
	input {
		margin: 10px 0;
		padding: 20px;
		border-radius: 7px;
		border: none;
		background-color: ${({ theme }) => theme.inpColor};
	}
	button {
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
		&:hover {
			box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.shadowColor};
		}
	}
	p {
		&.inpWarning {
			margin: 5px 0 15px 5px;
			font-size: 13px;
			color: #dc143c;
		}
	}
`;
