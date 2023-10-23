import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Login.style';

export default function Login() {
	const navigate = useNavigate();
	// const [inpVal, setInpVal] = useState('');
	// const [warning, setWarning] = useState(false);

	// 숫자가 아닐 때 경고창 띄우기
	// 아무것도 입력하지 않았을 때 경고창 띄우지 않기
	// useEffect(() => {
	//   if (inpVal === '') {
	//     setWarning(false);
	//   } else if (isNaN(Number(inpVal))) {
	//     setWarning(true);
	//   } else {
	//     setWarning(false);
	//   }
	// }, [inpVal]);
	return (
		<>
			<S.Container>
				{/* <input
          onChange={e => setInpVal(e.target.value)}
          type='text'
          placeholder='useEffect 공부를 위한 input : 숫자만 입력하세요'
          value={inpVal}
        /> */}
				{/* {warning && <p>숫자만 입력하세욧!!</p>} */}
				<S.LoginFormWrapper>
					<header>
						<h1>Welcome Back</h1>
						<p>Please enter your details.</p>
					</header>
					<form>
						<label htmlFor="inp_email">Email</label>
						<input
							type="text"
							placeholder="Enter your email"
							id="inp_email"
						/>
						<label htmlFor="inp_pwd">Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							id="inp_pwd"
						/>
						<div className="wrap_loginKeep">
							<input
								type="checkbox"
								id="saveInfo"
							/>
							<label htmlFor="saveInfo">Remember for 30 days</label>
						</div>
						<S.BtnWrapper>
							<h2 className="screen-out">
								이메일을 통한 로그인 버튼과 구글계정을 통한 로그인 버튼
							</h2>
							<button onClick={() => navigate('/')}>Sign in</button>
							{/* <button>Sign in with Google</button> */}
						</S.BtnWrapper>
					</form>
					<S.LinkWrapper>
						<p>Don't have an account?</p>
						<Link to="/signup">Sign up for free</Link>
					</S.LinkWrapper>
				</S.LoginFormWrapper>
			</S.Container>
		</>
	);
}
