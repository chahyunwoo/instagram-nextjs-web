export interface CommentType {
	comment: string;
	username: string;
	image: string;
}

export interface SimplePostType extends Omit<FullPostType, 'comments'> {
	comments: number;
}

export interface FullPostType {
	id: string;
	username: string;
	userImage: string;
	image: string;
	text: string;
	createdAt: string;
	likes: string[];
	comments: CommentType[];
}
