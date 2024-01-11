import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import {
	DataSnapshot,
	get,
	getDatabase,
	ref,
	remove,
	set,
	update,
} from 'firebase/database';
import { Email, Pwd, User, UserId } from '../Model/auth';
import { TodoItem, TodoList } from '../Model/todo';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase();

// Google 로그인
export async function googleLogin() {
	return signInWithPopup(auth, provider).catch(console.error);
}

// Email 회원가입
export async function signupEmail(email: Email, pwd: Pwd) {
	return await createUserWithEmailAndPassword(auth, email, pwd).catch(
		(error) => error.code
	);
}

// Email 로그인
export async function emailLogin(email: Email, password: Pwd) {
	return await signInWithEmailAndPassword(auth, email, password).catch(
		(error) => error.code
	);
}

export function logout() {
	signOut(auth).catch(console.error);
}

export function getUserInfo(callback: (user: User | null) => void) {
	onAuthStateChanged(auth, (user) => {
		callback(user);
	});
}

export async function addNewTodo(userId: UserId, todoItem: TodoItem) {
	set(ref(database, `todoList/${userId}/${todoItem.id}`), {
		...todoItem,
	});
}

export async function getTodos(userId: UserId): Promise<TodoList | []> {
	return get(ref(database, `todoList/${userId}`)).then((snapshot) => {
		if (snapshot.exists()) {
			return Object.values(snapshot.val()) as TodoList;
		}
		return [];
	});
}

export function editTodo(userId: UserId, todoItem: TodoItem) {
	const { id: todoId } = todoItem;
	const todoToUpdate: Record<string, Partial<TodoItem>> = {};
	todoToUpdate[`/todoList/${userId}/${todoId}`] = todoItem;
	return update(ref(database), todoToUpdate);
}

export function deleteTodo(userId: UserId, todoItem: TodoItem) {
	const { id: todoId } = todoItem;
	return remove(ref(database, `todoList/${userId}/${todoId}`));
}

// function removeAllTodos(){
//   return remove(ref(database, 'todoList'));
// }

export async function getScrap(userId: UserId) {
	return get(ref(database, `scrap/${userId}`)) //
		.then((snapshot: DataSnapshot) => {
			const items: Record<string, TodoItem> = snapshot.val() || {};
			const importantItems = Object.values(items).filter(
				(item) => item.isImportant
			);
			return importantItems;
		});
}

export async function addOrUpdateToScrap(userId: UserId, todoItem: TodoItem) {
	return set(ref(database, `scrap/${userId}/${todoItem.id}`), todoItem);
}

export async function removeFromScrap(userId: UserId, todoId: string) {
	return remove(ref(database, `scrap/${userId}/${todoId}`));
}
