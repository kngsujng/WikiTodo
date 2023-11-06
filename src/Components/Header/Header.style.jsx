import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 75%;
	height: 4%;
	margin: 10px 0;
	padding: 2% 0 4%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${({ theme }) => theme.inpColor};
	h2 {
		color: ${({ theme }) => theme.txtColor};
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
			color: ${({ theme }) => theme.txtColor};
			&:hover,
			&.active {
				outline: none;
				padding: 0 0 2px 0;
				border-bottom: 2px solid ${({ theme }) => theme.filterColor};
				color: ${({ theme }) => theme.filterColor};
				cursor: pointer;
			}
		}
	}
`;
