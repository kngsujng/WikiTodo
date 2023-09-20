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
`;
