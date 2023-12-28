import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 5rem auto;
	padding: 2rem 0;
	width: 65vh;
	height: 80vh;
	background-color: ${({ theme }) => theme.mainBgColor};
	border-radius: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	color: ${({ theme }) => theme.txtColor};
`;
