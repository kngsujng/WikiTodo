import { styled } from 'styled-components';

export const Wrapper = styled.form`
	width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	label {
		font-weight: 600;
		font-size: 18px;
	}
	input {
		margin: 10px 0;
		padding: 20px;
		border-radius: 7px;
		border: none;
		background-color: #f1f1f1;
	}
	button {
		width: 50%;
		margin: 0 auto;
		padding: 10px;
		border-radius: 15px;
		background-color: #000000;
		color: #ffffff;
		font-size: 18px;
		&:hover {
			box-shadow: 0px 4px 4px 0px #00000040;
		}
	}
`;
