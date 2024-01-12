import { useCallback, useEffect, useState } from 'react';

type ValueType = { email: string; pwd: string; confirmPwd?: string };
type ErrorType = { emailErr: string; pwdErr: string; etcErr: string };

const useInputWithValidation = (initialValue: ValueType) => {
	const [value, setValue] = useState(initialValue);
	const [errorMsg, setErrorMsg] = useState<ErrorType>({
		emailErr: '',
		pwdErr: '',
		etcErr: '',
	});
	const [isBtnActive, setIsBtnActive] = useState(false);

	const validateInputs = useCallback((inputValue: ValueType): boolean => {
		const emailPattern =
			/^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
		const pwdPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
		const emailErrorMsg = emailPattern.test(inputValue.email)
			? ''
			: '✔︎ 이메일 형식이 올바르지 않습니다.';
		const pwdErrorMsg = pwdPattern.test(inputValue.pwd)
			? ''
			: '✔︎ 영문, 숫자, 특수기호를 조합하여 8자리 이상 입력해주세요.';
		let confirmPwdErrorMsg = '';
		if (inputValue.confirmPwd !== undefined) {
			confirmPwdErrorMsg =
				inputValue.pwd === inputValue.confirmPwd
					? ''
					: '✔︎ 비밀번호가 일치하지 않습니다.';
		}

		if (inputValue.email) {
			setErrorMsg((prev) => ({ ...prev, emailErr: emailErrorMsg }));
		}
		if (inputValue.pwd) {
			setErrorMsg((prev) => ({ ...prev, pwdErr: pwdErrorMsg }));
		}
		if (inputValue.confirmPwd) {
			setErrorMsg((prev) => ({ ...prev, etcErr: confirmPwdErrorMsg }));
		}
		return !(
			emailErrorMsg ||
			pwdErrorMsg ||
			(inputValue.confirmPwd !== undefined && confirmPwdErrorMsg)
		);
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setValue((prev: ValueType) => ({ ...prev, [name]: value }));
	};

	const onInputReset = (): void => {
		setValue(initialValue);
		setErrorMsg({
			emailErr: '',
			pwdErr: '',
			etcErr: '',
		});
	};

	useEffect(
		() => setIsBtnActive(validateInputs(value)),
		[value, validateInputs]
	);

	return {
		value,
		errorMsg,
		isBtnActive,
		onChange,
		onInputReset,
		setErrorMsg,
	};
};

export { useInputWithValidation };
