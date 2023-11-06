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
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 75%;
		height: 100%;
		margin: 10px 0;
	}
	select {
		width: 40%;
	}
	textarea {
		resize: none;
	}
`;
