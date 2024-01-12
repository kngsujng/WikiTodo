import * as S from './Login.style';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { googleLogin, emailLogin } from '../../Api/firebase';
import { useInputWithValidation } from '../../Hooks/useInputWithValidation';

export default function Login() {
	const {
		value: { email, pwd },
		errorMsg: { emailErr, pwdErr, etcErr },
		isBtnActive,
		onChange,
		onInputReset,
		setErrorMsg,
	} = useInputWithValidation({
		email: '',
		pwd: '',
	});
	const navigate = useNavigate();

	const handleGoogleLoginBtn = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		await googleLogin();
		navigate('/main');
	};

	const handleEmailLoginBtn = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		const result = await emailLogin(email, pwd);
		if (result === 'auth/invalid-login-credentials') {
			setErrorMsg((prev) => ({
				...prev,
				etcErr:
					'✔︎ 아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.',
			}));
			setTimeout(onInputReset, 3000);
		} else {
			navigate('/main');
		}
	};

	return (
		<>
			<S.Container>
				<S.LoginFormWrapper>
					<header>
						<h1>로그인</h1>
						<p>지금 바로 위키투두를 시작하세요 !</p>
					</header>
					<form>
						<label htmlFor="inp_email">Email</label>
						<input
							type="text"
							id="inp_email"
							name="email"
							value={email ?? ''}
							onChange={onChange}
						/>
						<p className="errorTxt">{emailErr}</p>
						<label htmlFor="inp_pwd">Password</label>
						<input
							type="password"
							id="inp_pwd"
							name="pwd"
							value={pwd ?? ''}
							onChange={onChange}
						/>
						<p className="errorTxt">{pwdErr}</p>
						<div className="wrap_loginKeep">
							<input
								type="checkbox"
								id="saveInfo"
							/>
							<label htmlFor="saveInfo">로그인 상태 유지</label>
						</div>
						{etcErr && <p className="errorTxt">{etcErr}</p>}
						<S.BtnWrapper>
							<h2 className="screen-out">
								이메일을 통한 로그인 버튼과 구글계정을 통한 로그인 버튼
							</h2>
							<button
								className="emailLogin"
								disabled={!isBtnActive}
								onClick={handleEmailLoginBtn}
							>
								로그인
							</button>
							<button
								className="googleLogin"
								onClick={handleGoogleLoginBtn}
							>
								<FcGoogle />
								구글로 시작하기
							</button>
						</S.BtnWrapper>
					</form>
					<S.LinkWrapper>
						<p>계정이 없으신가요?</p>
						<Link to="/signup">회원가입 바로가기</Link>
					</S.LinkWrapper>
				</S.LoginFormWrapper>
			</S.Container>
		</>
	);
}
