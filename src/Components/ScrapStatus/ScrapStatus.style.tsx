import styled from 'styled-components';

export const ScrapStatusWrapper = styled.div`
	position: relative;
	padding: 7px;
	border: 1.5px solid ${({ theme }) => theme.grayTxtColor};
	border-radius: 50%;
	color: ${({ theme }) => theme.titleColor};
	font-size: inherit;
	&:hover {
		color: ${({ theme }) => theme.filterColor};
		border: 1.5px solid ${({ theme }) => theme.filterColor};
	}
`;

export const NotificationWrapper = styled.div`
	position: absolute;
	top: -25%;
	left: 60%;
	p {
		line-height: 20px;
		width: 20px;
		height: 20px;
		text-align: center;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.notificationColor};
		color: ${({ theme }) => theme.titleColor};
	}
`;
