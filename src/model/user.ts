export interface UserType {
	name: string;
	username: string;
	email: string;
	image?: string;
}

export interface SimpleUserType extends Pick<UserType, 'username' | 'image'> {}

export interface DetailUserType extends UserType {
	following: SimpleUserType[];
	followers: SimpleUserType[];
	bookmarks: string[];
}
