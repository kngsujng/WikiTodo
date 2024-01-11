import * as S from './Loading.style';
import Layout from '../Layout/Layout';

interface LoadingProps {
	useLayout: boolean;
}

const Loading: React.FC<LoadingProps> = ({ useLayout = true }) => {
	return (
		<>
			{useLayout ? (
				<Layout>
					<p>로딩중 ... </p>
					<img
						src={process.env.PUBLIC_URL + '/Image/wikiTodo_loading.gif'}
						alt="로딩중"
						width="10%"
					/>
				</Layout>
			) : (
				<S.ScrapWrapper>
					<p>로딩중 ... </p>
					<img
						src={process.env.PUBLIC_URL + '/Image/wikiTodo_loading.gif'}
						alt="로딩중"
						width="10%"
					/>
				</S.ScrapWrapper>
			)}
		</>
	);
};

export default Loading;
