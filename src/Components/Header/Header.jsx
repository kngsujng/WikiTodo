import React, { useState } from 'react';
import * as S from './Header.style';

export default function Header({ filters, filter, onFilterChange }) {
	const [selectedFilter, setSelectedFilter] = useState(filter);
	const handleFilterBtn = (f) => {
		onFilterChange(f);
		setSelectedFilter(f);
	};

	return (
		<S.Wrapper>
			<h2>Todo List</h2>
			<ul>
				{filters.map((f, i) => (
					<li key={i}>
						<button
							className={f === selectedFilter ? 'active' : ''}
							autoFocus={f === selectedFilter}
							onClick={() => handleFilterBtn(f)}
						>
							{f}
						</button>
					</li>
				))}
			</ul>
		</S.Wrapper>
	);
}
