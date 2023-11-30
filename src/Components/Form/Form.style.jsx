import { styled } from 'styled-components';

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 75%;
	height: 100%;
	margin: 30px 0;
	select {
		width: 40%;
		padding: 5px;
		cursor: pointer;
		color: ${({ theme }) => theme.txtColor};
	}
	input[type='text'] {
		padding: 13px;
		border: 1px solid gray;
		width: 100%;
		color: ${({ theme }) => theme.txtColor};
	}
	textarea {
		padding: 13px;
		resize: none;
		&::placeholder {
			color: ${({ theme }) => theme.grayTxtColor};
		}
	}
`;
