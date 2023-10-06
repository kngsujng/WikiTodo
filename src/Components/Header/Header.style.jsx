import styled from 'styled-components';

export const Wrapper = styled.section`
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
		button:hover {
			border-bottom: 2px solid #00a2e5;
			color: #00a2e5;
			cursor: pointer;
		}
	}
`;
