import styled from 'styled-components';

export const ScrapStatusWrapper = styled.div`
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
