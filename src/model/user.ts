export interface AuthUserType {
	id: string;
	name: string;
	username: string;
	email: string;
	image?: string;
}

export interface SimpleUserType
	extends Pick<AuthUserType, 'username' | 'image'> {}

export interface HomeUserType extends AuthUserType {
	following: SimpleUserType[];
	followers: SimpleUserType[];
	bookmarks: string[];
}

export interface SearchUserType extends AuthUserType {
	following: number;
	followers: number;
}

export interface ProfileUserType extends SearchUserType {
	posts: number;
}
