import { styled } from 'styled-components';

export const Wrapper = styled.section`
	margin-bottom: 20px;
	width: 75%;
	height: 60%;
	display: flex;
	flex-direction: column;
	/* background-color: blue; */
	h1 {
		font-weight: 600;
		font-size: 22px;
	}
	ul {
		border-top: 2px solid #f1f1f1;
		overflow: auto;
	}
	li {
		width: 100%;
		margin-bottom: 0.5rem;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f5f5f5;
		border-radius: 15px;
		&:first-child {
			margin-top: 0.5rem;
		}
		&:hover {
			background-color: #ebebeb;
		}
		input {
			margin-right: 10px;
			cursor: pointer;
		}
	}
`;
