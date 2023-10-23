import { styled } from 'styled-components';

export const Container = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0px 4px 4px 0px #00000040;
	header {
		margin-bottom: 45px;
	}
	h1 {
		margin-bottom: 10px;
		font-size: 30px;
		font-weight: 700;
	}
	p {
		color: grey;
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
		margin: 30px auto;
		padding: 10px;
		border-radius: 5px;
		background-color: #000000;
		color: #ffffff;
		font-size: 15px;
		font-weight: 600;
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
	}
	p {
		margin-right: 5px;
	}
`;
