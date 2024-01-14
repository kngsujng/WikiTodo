import { useEffect, useState } from 'react';

const useTitle = (pageTitle: string) => {
	const [title, setTitle] = useState<string>(pageTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title') as HTMLTitleElement;
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

export default useTitle;
