import React from 'react';
import * as S from './NavBar.style';
import { LuListTodo } from 'react-icons/lu';

export default function NavBar() {
	return (
		<>
			<S.NavWrapper>
				<div>
					<LuListTodo style={{ fontSize: '1.5rem' }} />
					<h1>Wiki-Todo</h1>
				</div>
				{/* <button>Logout</button> */}
			</S.NavWrapper>
		</>
	);
}
