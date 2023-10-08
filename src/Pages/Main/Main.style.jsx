import { styled } from 'styled-components';

export const Wrapper = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 550px;
	height: 700px;
	background-color: ${({ theme }) => theme.mainBgColor};
	border-radius: 10px;
	box-shadow: 0px 4px 4px 0px #00000040;
`;
