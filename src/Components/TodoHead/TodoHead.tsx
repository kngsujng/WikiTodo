import { ReactNode, useState } from 'react';
import * as S from './TodoHead.style';
import { ProgressFilter, ProgressFilters } from '../../Model/todo';

interface OwnProps {
	children: ReactNode;
	filters?: ProgressFilters;
	filter?: ProgressFilter;
	onFilterChange?: (filter: ProgressFilter) => void;
}

const TodoHead: React.FC<OwnProps> = ({
	children,
	filters,
	filter,
	onFilterChange,
}) => {
	const [selectedFilter, setSelectedFilter] = useState<
		ProgressFilter | undefined
	>(filter);

	const handleFilterBtn = (f: ProgressFilter) => {
		if (onFilterChange) {
			onFilterChange(f);
			setSelectedFilter(f);
		}
	};

	return (
		<S.Wrapper>
			<h2>{children}</h2>
			<ul>
				{filters &&
					filters.map((f: ProgressFilter, i) => (
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
};

export default TodoHead;
