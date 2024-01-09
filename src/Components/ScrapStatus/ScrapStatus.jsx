import React from 'react';
import { useQuery } from 'react-query';
import * as S from './ScrapStatus.style';
import { FaRegStar } from 'react-icons/fa';
import { getScrap } from '../../Api/firebase';
import { useAuthContext } from '../../Context/AuthContext';

export default function ScrapStatus() {
	const { uid } = useAuthContext();
	const { data: scrap } = useQuery(['scrap'], () => getScrap(uid));

	return (
		<S.ScrapStatusWrapper>
			<FaRegStar />
			{scrap && (
				<S.NotificationWrapper>
					<p>{scrap.length}</p>
				</S.NotificationWrapper>
			)}
		</S.ScrapStatusWrapper>
	);
}
