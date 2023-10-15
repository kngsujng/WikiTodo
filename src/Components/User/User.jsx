import React from 'react';
import * as S from './User.style';

export default function User({ user: { photoURL, displayName } }) {
	return (
		<S.Wrapper>
			<img
				src={photoURL}
				alt={`${displayName} 사용자 프로필 이미지`}
			/>
			{/* <span>{displayName}</span> */}
		</S.Wrapper>
	);
}
