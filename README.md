# WIKITODO(위키투두)

#### 배포 URL : [WIKITODO](https://wikitodo.netlify.app/)

> 테스트 계정 ID: test@test.com PW: test1234!

<br>

## 1. 프로젝트 소개

### 1.1 프로젝트 명 : WIKITODO

- WIKITODO 서비스는 일정 관리 애플리케이션입니다.
- 할 일을 등록, 편집, 삭제 및 스크랩, 필터 기능을 제공합니다.
- 사용자 편의를 위해 다크모드를 지원합니다.
- 회원 여부에 따라 기능을 차등 지원합니다.

<br>

### 1.2. 개발 환경

### [기술 스택]

- Front-End

  <div style="display:inline">
  <img src ="https://img.shields.io/badge/-TypeScript-informational?&style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">    
  <img src="https://img.shields.io/badge/-styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

</div>

- Back-End

  <div>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
  </div>

<br>
<br>

## 2. 프로젝트 세부 기능

<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/27edc747-1ec1-4529-944c-08a47723b4b7"
                    alt=""></td>
            <td>스플래쉬<ul>
                    <li>회원, 비회원 이용 선택</li>
                    <li>비회원으로 이용하기: 메인 화면으로 이동</li>
                    <li>로그인하고 이용하기: 로그인 화면으로 이동</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/7ae1eec8-ac12-45e1-92ee-23f52a70686b"
                    alt=""></td>
            <td>로그인<ul>
                    <li>'이메일 로그인', '구글계정을 통한 로그인' 선택</li>
                    <li>이메일 로그인시, 유효성 검사를 진행하고 오류 메시지 제공</li>
                    <li>이메일과 비밀번호가 유효한 경우 메인 화면으로 이동</li>
                    <li>구글계정을 통한 로그인시, 계정 선택 후 메인 화면으로 이동</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/8aa241a4-5e17-467e-b72d-bff497ed90a4"
                    alt=""></td>
            <td>회원가입<ul>
                    <li>이메일 로그인을 위한 회원가입 진행</li>
                    <li>유효성 검사를 진행하고, 오류 메시지 제공</li>
                    <li>비밀번호 미리보기 기능 제공</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
    
<br>

<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/4135495e-ed17-4f77-ada3-caa23c04b347"
                    alt=""></td>
            <td>메인 페이지<ul>
                    <li>완료 상태에 따라 필터 기능 제공</li>
                    <li>할 일 등록, 편집, 삭제 및 스크랩, 완료 토글 기능 제공</li>
                    <li>다크모드 지원</li>
                    <li>회원 이용시, 스크랩 모아보기 기능 제공</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/1d774499-f937-433d-81a4-37f4443f1ba1"
                    alt=""></td>
            <td>등록 페이지<ul>
                    <li>카테고리, 제목, 상세 내용, 중요도 표시</li>
                    <li>모든 필수 항목 입력될 때까지 버튼 비활성화</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/c12fe1d6-6507-45d3-b011-14642b0e13f4"
                    alt=""></td>
            <td>상세 페이지<ul>
                    <li>메인 페이지에서 할 일을 클릭하면 상세 페이지로 이동</li>
                    <li>카테고리, 제목, 상세 내용 보여줌</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><img src="https://github.com/kngsujng/WikiTodo/assets/110231276/ba32f5d3-47e4-4a2f-98b5-d23d9ed03654"
                    alt=""></td>
            <td>스크랩 페이지<ul>
                    <li>최신 날짜순, 카테고리별, 완료 여부에 따라 스크랩된 할 일 필터링</li>
                    <li>선택된 카테고리에 해당하는 스크랩된 할 일이 없다면, 문구 표시</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### **[프로젝트 주요 기능 설명]**

- **☑️ Context API를 통한 전역 상태 관리**

사용자 정보와 다크모드 상태를 모든 페이지에서 관리하기 위해 Context API를 사용하였다.
또한, 모든 페이지에서 할 일을 useState를 통해 상태관리하기 보다는, useReducer와 Context API 조합을 이용하여 각 페이지에서 액션만 전달하고 TodoContext에서 모든 상태를 관리하였다.

- **☑️ React-Query를 활용한 파이어베이스 비동기 데이터 통신과 실시간 UI 업데이트 구현**

React-Query를 통해 'scrap'과 'uid'의 조합으로 고유한 key를 생성하고, 이를 활용하여 파이어베이스와의 비동기 데이터 통신을 구현했다. 데이터가 업데이트 되기 전까지 캐시된 정보를 UI에 표시한다. 또한, 스크랩을 선택하거나 해제하면 스크랩된 할 일의 개수가 즉각적으로 업데이트될 수 있도록 하여 사용자에게 신속한 사용자 경험을 제공한다.

- **☑️ 커스텀 훅을 활용한 로직의 재사용**

1. useInputWithValidation : 로그인과 회원가입 페이지에서 사용되는 이메일과 비밀번호(확인) 유효성 검사 로직 재사용
2. useTitle: 페이지별 Doc의 title을 제공하여 사용자 경험 향상 (예시 : WikiTodo | 홈, WikiTodo | 등록 등)
3. useScrap : 사용자의 uid가 존재하는 경우 한해서만 스크랩된 할 일을 즉각적으로 업데이트 하기 위한 React-Query 로직 재사용

<br>

## 4. 트러블 슈팅

<br>

### 4.1. 회원/비회원별 할 일 상태 관리

- **문제 상황**

  - 회원 로그인시, 비회원 데이터가 초기 렌더링되고 난 후 회원 데이터가 렌더링된다.

- **원인 추론**

  - 회원은 파이어베이스를 통해 데이터가 관리되고 있고, 비회원은 로컬스토리지를 통해 데이터를 관리하고 있었기 때문에 파이어베이스에서 비동기 통신을 하는 동안 로컬 스토리지는 브라우저에 저장된 동기적인 데이터기 때문에 초기 렌더링시 즉시 보여준다.

- **해결 방법**

  - 초기 렌더링 시에 로딩 상태를 표시하여 파이어베이스 데이터가 완전히 로드되기 전에 사용자에게 대기 상태를 알렸다.

- **적용 코드**

```js
const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const { user, uid } = useAuthContext();
	const [isLoading, setIsLoading] = useState < boolean > false;
	const [todos, dispatch] = useReducer(todoReducer, []);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				if (user) {
					const firebaseTodos = await getTodos(uid);
					dispatch({ type: 'SET', todos: firebaseTodos });
				}
				if (!user) {
					const storedTodos = localStorage.getItem('todoList');
					const localTodos: TodoList = storedTodos
						? JSON.parse(storedTodos)
						: [];
					dispatch({ type: 'SET', todos: localTodos });
				}
			} catch (error) {
				console.error('Error fetching todos:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [user, uid]);

	return (
		<TodoContext.Provider value={{ todos, dispatch, isLoading }}>
			{children}
		</TodoContext.Provider>
	);
};
```

### 4.2. 임의로 url창 조작하여 페이지 이동 해결

- **문제 상황**

  - 비회원에게 제공되지 않은 scrap페이지를 임의로 url을 조작한 후 페이지 이동 및 이용한다.

- **원인 추론**

  - 회원별 라우터 경로가 차이가 존재하지 않았다.

- **해결 방법**

  - ProtectedRoute 컴포넌트를 생성해서 user가 아닌 사용자가 Scrap 페이지를 이용하려고 하면 main 페이지로 리다이렉트시킨다.

- **적용 코드**

```js
...
<Route
	path="/scrap"
	element={
		<ProtectedRoute>
			<Scrap />
		</ProtectedRoute>
}
/>
...
```

```js
onst ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const { user } = useAuthContext();
	if (!user) {
		return (
			<Navigate
				to="/main"
				replace
			/>
		);
	}
	return children;
};
export default ProtectedRoute;

```

<br>
