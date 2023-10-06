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
		button {
			padding: 0 0 4px 0;
			font-size: 15px;
			&:hover {
				padding: 0 0 2px 0;
				border-bottom: 2px solid #05acf3;
				color: #00a2e5;
				cursor: pointer;
			}
		}
	}
`;
