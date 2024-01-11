import * as S from './ScrapStatus.style';
import useScrap from '../../Hooks/useScrap';
import { FaRegStar } from 'react-icons/fa';

export default function ScrapStatus() {
	// const {
	// 	scrapQuery: { data: scrap },
	// } = useScrap();

	return (
		<S.ScrapStatusWrapper>
			<FaRegStar />
			{/* {scrap && (
				<S.NotificationWrapper>
					<p>{scrap.length}</p>
				</S.NotificationWrapper>
			)} */}
		</S.ScrapStatusWrapper>
	);
}
