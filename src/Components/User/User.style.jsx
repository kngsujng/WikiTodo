import styled from 'styled-components';

export const Wrapper = styled.div`
	img {
		display: block;
		width: 1.8rem;
		border-radius: 50%;
	}
	span {
		display: none;
	}
	@media (min-width: 768px) {
		span {
			display: block;
			font-size: 0.9rem;
		}
	}
`;
