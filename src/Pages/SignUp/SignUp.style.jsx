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
	h1 {
		margin-bottom: 40px;
		font-size: 1.6rem;
		font-weight: 700;
	}
	p {
		&.errorTxt {
			height: 20px;
			font-size: 0.8rem;
			color: ${({ theme }) => theme.errorMsg};
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
			margin: 5px 0;
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
	}
`;
export const BtnWrapper = styled.section`
	button {
		width: 100%;
		margin: 0 auto 30px;
		padding: 10px;
		border-radius: 5px;
		background-color: #000000;
		color: #ffffff;
		font-size: 1rem;
		font-weight: 600;
		&:disabled {
			${({ theme }) => theme.disabledBtnColor};
		}
	}
`;

export const SignUpFormWrapper = styled.section`
	width: 70%;
`;

export const InpPwdWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	input {
		width: 100%;
	}
	button {
		position: absolute;
		right: 0;
	}
`;
export const LinkWrapper = styled.section`
	display: flex;
	gap: 10px;
	a {
		margin-right: auto;
		font-weight: 600;
	}
	p {
		margin-right: 5px;
	}
`;
