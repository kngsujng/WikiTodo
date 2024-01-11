export type TodoItem = {
	id: string;
	date: string;
	category: Category;
	title: string;
	detail: string;
	isImportant: boolean;
	isCompleted: boolean;
};

export type TodoList = TodoItem[];

export type ProgressFilter = 'all' | 'progressing' | 'completed';

export type ProgressFilters = ProgressFilter[];

export type Category =
	| '카테고리 (필수)'
	| 'work'
	| 'study'
	| 'exercise'
	| 'plan'
	| 'etc';

export type ToggleType = 'completed' | 'important';

export type scrapSortOption =
	| 'sort'
	| 'by_latestDate'
	| 'by_category'
	| 'by_isCompleted';
