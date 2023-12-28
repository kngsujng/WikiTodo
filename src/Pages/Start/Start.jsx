import * as S from './Start.styled';
import { useNavigate } from 'react-router-dom';
export default function Start() {
	const navigate = useNavigate();
	return (
		<S.Wrapper>
			<img
				alt="splash"
				src="Image/image.png"
			/>
			<h1>스스로 가꾸어 나가는 일상</h1>
			<p>위키투두에 오신 것을 환영합니다!</p>
			<button onClick={() => navigate('/main')}>비회원으로 이용하기</button>
			<button onClick={() => navigate('/login')}>로그인하고 이용하기</button>
		</S.Wrapper>
	);
}
