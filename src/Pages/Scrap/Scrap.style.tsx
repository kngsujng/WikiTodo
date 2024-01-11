import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 80%;
	height: 90%;
	overflow: auto;
	display: flex;
	flex-direction: column;
`;

export const Select = styled.select`
	width: 30%;
	margin: 10px 0;
	padding: 5px;
	cursor: pointer;
	color: ${({ theme }) => theme.txtColor};
`;

export const SelectWrapper = styled.div`
	display: flex;
	gap: 10px;
`;
