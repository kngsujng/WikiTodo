// Scrap을 읽어오고 업데이트하는 모든 부분을 담당하는 커스텀훅

import { useQuery, useQueryClient, useMutation } from 'react-query';
import {
	getScrap as fetchScrap,
	addOrUpdateToScrap,
	removeFromScrap,
} from '../Api/firebase';
import { useAuthContext } from '../Context/AuthContext';

export default function useScrap() {
	const { uid } = useAuthContext();
	// const queryClient = useQueryClient();
	// const scrapQuery = useQuery(['scrap', uid || ''], () => fetchScrap(uid), {
	// 	// uid가 존재하는 경우에만 작동하도록
	// 	enabled: !!uid,
	// });
	// const addOrUpdateItem = useMutation(
	// 	(todoItem) => addOrUpdateToScrap(uid, todoItem),
	// 	{
	// 		onSuccess: () => queryClient.invalidateQueries(['scrap', uid]),
	// 	}
	// );
	// const removeItem = useMutation((id) => removeFromScrap(uid, id), {
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries(['scrap', uid]);
	// 	},
	// });
	// return { scrapQuery, addOrUpdateItem, removeItem };
}
