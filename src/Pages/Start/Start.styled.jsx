import styled, { keyframes } from 'styled-components';

const slidein = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin: 4rem auto;
	padding: 5rem 0;
	width: 70vh;
	height: 80vh;
	border-radius: 10px;
	color: ${({ theme }) => theme.txtColor};

	img {
		width: 30%;
		animation: ${slidein} 2s linear;
	}
	h1 {
		margin: 2% 0 0 0;
		font-size: 19px;
		font-weight: 600;
	}
	p {
		margin-bottom: 15%;
	}
	button {
		width: 45%;
		padding: 15px;
		border-radius: 15px;
		background-color: ${({ theme }) => theme.activeBtnColor};
		color: #ffffff;
		font-size: 18px;
		&:not(:disabled) {
			&:hover {
				color: ${({ theme }) => theme.activeBtnColor};
				background-color: #ffffff;
				box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.shadowColor};
			}
		}
	}
`;
