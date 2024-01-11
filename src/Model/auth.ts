export type AuthUser = { uid: string; [key: string]: any };

// export type NoAuthUser = null;

// export type User = AuthUser | NoAuthUser;
export type User = AuthUser;

export type UserId = string;

export type Email = string;

export type Pwd = string;
