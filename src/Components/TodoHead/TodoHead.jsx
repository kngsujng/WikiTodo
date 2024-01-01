import React, { useState } from 'react';
import * as S from './TodoHead.style';

export default function TodoHead({
	children,
	filters,
	filter,
	onFilterChange,
}) {
	const [selectedFilter, setSelectedFilter] = useState(filter);
	const handleFilterBtn = (f) => {
		onFilterChange(f);
		setSelectedFilter(f);
	};

	return (
		<S.Wrapper>
			<h2>{children}</h2>
			<ul>
				{filters &&
					filters.map((f, i) => (
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
