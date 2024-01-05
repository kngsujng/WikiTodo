import React from 'react';
import Layout from './../Layout/Layout';

export default function Loading() {
	return (
		<Layout>
			<p>로딩중 ... </p>
			<img
				src={process.env.PUBLIC_URL + '/Image/wikiTodo_loading.gif'}
				alt="로딩중"
				width="10%"
			/>
		</Layout>
	);
}
