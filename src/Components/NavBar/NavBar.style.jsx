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
	box-shadow: ${({ theme }) => theme.navBarShadow};
	color: ${({ theme }) => theme.titleColor};
	div {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		&.btn_wrapper {
			gap: 0.5rem;
		}
	}
	h1 {
		margin-top: 5px;
		font-weight: 700;
		font-size: 1.5rem;
		cursor: pointer;
	}
	button {
		width: 2rem;
		padding: 6px 6px 4px;
		border: 1.5px solid ${({ theme }) => theme.grayTxtColor};
		border-radius: 50%;
		color: ${({ theme }) => theme.titleColor};
		&.btn_toggle {
			font-size: inherit;
		}
		&.btn_login {
			width: 100%;
			margin-left: 10px;
			padding: 8px;
			border-radius: 15px;
			border: 1.5px solid transparent;
			background-color: ${({ theme }) => theme.titleColor};
			color: ${({ theme }) => theme.mainBgColor};
			&:hover {
				background-color: ${({ theme }) => theme.filterColor};
				color: ${({ theme }) => theme.mainBgColor};
			}
		}
		&:hover {
			color: ${({ theme }) => theme.filterColor};
			border: 1.5px solid ${({ theme }) => theme.filterColor};
		}
	}
`;
