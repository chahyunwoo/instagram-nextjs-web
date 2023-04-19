import { client } from './sanity';

interface OAuthUserTyope {
	id: string;
	email: string | null;
	name: string | null;
	username: string;
	image?: string | null;
}

export async function addUser({
	id,
	username,
	email,
	name,
	image,
}: OAuthUserTyope) {
	return client.createIfNotExists({
		_id: id,
		_type: 'user',
		username,
		email,
		name,
		image,
		following: [],
		followers: [],
		bookmarks: [],
	});
}

export async function getUserByUsername(username: string) {
	return client.fetch(
		`*[_type == "user" && username == "${username}"][0] {
			...,
			"id": _id,
			following[] -> {username, image},
			followers[] -> {username, image},
			"bookmarks": bookmarks[] -> _id
		}`
	);
}
