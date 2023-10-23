import { styled } from 'styled-components';

export const Container = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60vh;
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.mainBgColor};
	box-shadow: ${({ theme }) => theme.boxShadow};
	header {
		margin-bottom: 50px;
		h1 {
			margin-bottom: 10px;
			font-size: 1.6rem;
			font-weight: 700;
		}
		p {
			color: grey;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		label {
			font-weight: 600;
		}
		input[type='text'],
		input[type='password'] {
			margin: 5px 0 20px;
			padding: 10px 0;
			border: none;
			background-color: transparent;
			border-bottom: 2px solid #f0f2f3;
			&::placeholder {
				color: #c6c7c8da;
			}
			&:focus {
				outline: none;
				border-bottom: 2px solid #1c7caa;
			}
		}
		input {
			border-bottom: ${(props) =>
				props.emailError || props.pwdError || props.confirmPwdError
					? '2px solid #ff3f3f'
					: 'none'};
		}
	}
	input[type='checkbox'] {
		margin: 0 5px 0 0;
		cursor: pointer;
	}
	div {
		&.wrap_loginKeep {
			display: flex;
			align-items: center;
		}
	}
`;
export const BtnWrapper = styled.section`
	button {
		width: 100%;
		margin: 30px auto 5px;
		padding: 10px;
		border-radius: 5px;
		background-color: #000000;
		color: #ffffff;
		font-size: 15px;
		font-weight: 600;
		&.emailLogin {
			&:disabled {
				cursor: default;
				background-color: ${({ theme }) => theme.disabledBtnColor};
			}
			&:not(disabled) {
				background-color: ${({ theme }) => theme.activeBtnColor};
			}
		}
		&.googleLogin {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 6px;
			margin: 0 0 30px;
		}
	}
`;

export const LoginFormWrapper = styled.section`
	width: 70%;
	div.wrap_loginKeep {
		label {
			font-weight: 400;
			font-size: 15px;
		}
	}
`;

export const LinkWrapper = styled.section`
	display: flex;
	gap: 10px;
	a {
		margin-right: auto;
		font-weight: 600;
		&:hover {
			color: ${({ theme }) => theme.activeBtnColor};
			font-weight: 700;
			text-decoration: underline;
		}
	}
	p {
		margin-right: 5px;
	}
`;
