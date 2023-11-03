import React from 'react';
import * as S from './User.style';
import { FaRegUser } from 'react-icons/fa';

export default function User({ user: { photoURL, displayName } }) {
	return (
		<S.Wrapper>
			{photoURL ? (
				<img
					src={photoURL}
					alt={`${displayName} 사용자 프로필 이미지`}
				/>
			) : (
				<FaRegUser size={20} />
			)}

			{/* <span>{displayName}</span> */}
		</S.Wrapper>
	);
}
