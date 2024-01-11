// Scrap을 읽어오고 업데이트하는 모든 부분을 담당하는 커스텀훅

import { useQuery, useQueryClient, useMutation } from 'react-query';
import {
	getScrap as fetchScrap,
	addOrUpdateToScrap,
	removeFromScrap,
} from '../Api/firebase';
import { useAuthContext } from '../Context/AuthContext';
import { TodoItem } from '../Model/todo';

const useScrap = () => {
	const { uid } = useAuthContext();
	const queryClient = useQueryClient();
	// const scrapQuery = useQuery(['scrap', uid || ''], () => fetchScrap(uid), {
	// 	enabled: !!uid,
	// });
	const scrapQuery = useQuery(['scrap', uid || ''], () => fetchScrap(uid), {
		enabled: !!uid,
	});

	const addOrUpdateItem = useMutation<void, Error, TodoItem>(
		(todoItem: TodoItem) => addOrUpdateToScrap(uid, todoItem),
		{
			onSuccess: () => queryClient.invalidateQueries(['scrap', uid]),
		}
	);

	const removeItem = useMutation<void, Error, string>(
		(id) => removeFromScrap(uid, id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['scrap', uid]);
			},
		}
	);
	return { scrapQuery, addOrUpdateItem, removeItem };
};

export default useScrap;
