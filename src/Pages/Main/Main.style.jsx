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
	width: 500px;
	height: 650px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0px 4px 4px 0px #00000040;
`;

export const NavWrapper = styled.section`
	width: 75%;
	height: 4%;
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
		font-weight: 600;
		font-size: 22px;
	}
	ul {
		display: flex;
		justify-content: flex-end;
	}
	li {
		&:nth-child(2) {
			margin: 0 0.8rem;
		}
		&:hover {
			border-bottom: 2px solid #00a2e5;
			color: #00a2e5;
			cursor: pointer;
		}
	}
`;
