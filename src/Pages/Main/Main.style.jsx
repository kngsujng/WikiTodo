import { styled } from 'styled-components';

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
	box-shadow: 0px 4px 4px 0px #00000040;
	button {
		&.btn_toggle {
			position: absolute;
			top: 2%;
			right: 2%;
			width: 2.2rem;
			height: 1.3rem;
			border-radius: 10px;
			text-align: center;
			line-height: 1.3rem;
			font-size: 18px;
			&:hover {
				background-color: ${({ theme }) => theme.disabledBtnColor};
				box-shadow: ${({ theme }) => theme.boxShadow};
			}
		}
	}
`;
