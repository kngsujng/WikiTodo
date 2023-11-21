import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 0 auto;
	padding: 2% 0;
	width: 65vh;
	height: 80vh;
	background-color: ${({ theme }) => theme.mainBgColor};
	border-radius: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	form {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 75%;
		height: 100%;
		margin: 10px 0;
	}
	select {
		width: 40%;
		padding: 5px;
		color: ${({ theme }) => theme.txtColor};
		cursor: pointer;
	}
	input[type='text'] {
		padding: 13px;
		border: 1px solid gray;
		width: 100%;
	}
	textarea {
		padding: 13px;
		resize: none;
	}
	label {
		color: ${({ theme }) => theme.txtColor};
	}
`;
