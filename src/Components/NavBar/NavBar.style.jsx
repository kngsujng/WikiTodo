import styled from 'styled-components';

export const NavWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3rem;
	padding: 0 20px;
	background-color: ${({ theme }) => theme.mainBgColor};
	color: ${({ theme }) => theme.txtColor};
	div {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}
	h1 {
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 100%;
	}
	button.btn_login {
		padding: 7px;
		color: ${({ theme }) => theme.txtColor};
		&:hover {
			padding: 5px;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.hoverColor};
			font-weight: 600;
		}
	}
	button {
		&.btn_toggle {
			width: 2.2rem;
			height: 1.4rem;
			border-radius: 10px;
			text-align: center;
			font-size: 1.3rem;
			&:hover {
				background-color: ${({ theme }) => theme.hoverColor};
				box-shadow: ${({ theme }) => theme.boxShadow};
			}
		}
	}
`;
