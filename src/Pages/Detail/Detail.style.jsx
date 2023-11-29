import styled from 'styled-components';

const getCategoryBackgroundColor = (category) => {
	switch (category) {
		case 'work':
			return '#C3BDF3';
		case 'study':
			return '#D4EEB9';
		case 'exercise':
			return '#A4E2E8';
		case 'plan':
			return '#FBC9DC';
		case 'etc':
			return '#FCE8A7';
		default:
			return 'transparent';
	}
};

export const Container = styled.section`
	width: 80%;
	height: 90%;
	div.contents-line {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		button {
			font-size: 1.3rem;
		}
	}
`;

export const Date = styled.p`
	margin: 15px 0 25px;
	font-size: 18px;
`;

export const Category = styled.p`
	display: inline-block;
	padding: 3px 8px;
	border-radius: 5px;
	background-color: ${({ category }) => getCategoryBackgroundColor(category)};
	font-size: 14px;
`;

export const Title = styled.p`
	margin: 20px 0;
	font-weight: 600;
	font-size: 20px;
`;

export const Detail = styled.div`
	position: relative;
	padding: 15px 10px;
	border-top: 2px solid ${({ theme }) => theme.borderColor};
	border-bottom: 2px solid ${({ theme }) => theme.borderColor};
	height: 60%;
	white-space: pre;
	overflow: scroll;
	p {
		position: absolute;
		top: 45%;
		right: 50%;
		transform: translate(50%, 50%);
		padding: 0;
		color: ${({ theme }) => theme.grayTxtColor};
	}
`;

export const IsWrapper = styled.div`
	text-align: right;
	span {
		display: inline-block;
		margin: 15px 0 0 10px;
		font-size: 1.3rem;
	}
`;
