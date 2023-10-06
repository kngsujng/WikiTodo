import React from 'react';
import * as S from './Header.style';

export default function Header({ filters, filter, onFilterChange }) {
	return (
		<S.Wrapper>
			<h1>Todo List</h1>
			<ul>
				{filters.map((f, i) => (
					<li key={i}>
						<button
							onClick={() => {
								onFilterChange(f);
							}}
						>
							{f}
						</button>
					</li>
				))}
			</ul>
		</S.Wrapper>
	);
}
