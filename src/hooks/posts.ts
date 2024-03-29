import { CommentType, SimplePostType } from '@/model/post';
import { useCallback } from 'react';
import useSWR from 'swr';

async function updateLike(id: string, like: boolean) {
	return fetch('/api/likes', {
		method: 'PUT',
		body: JSON.stringify({ id, like }),
	}).then((res) => res.json());
}

async function addComment(id: string, comment: string) {
	return fetch('/api/comments', {
		method: 'POST',
		body: JSON.stringify({ id, comment }),
	}).then((res) => res.json());
}

export default function usePosts() {
	const {
		data: posts,
		isLoading,
		error,
		mutate,
	} = useSWR<SimplePostType[]>('/api/posts');

	const setLike = useCallback(
		(post: SimplePostType, username: string, like: boolean) => {
			const newPost = {
				...post,
				likes: like
					? [...post.likes, username]
					: post.likes.filter((item) => item !== username),
			};

			const newPosts = posts?.map((item) =>
				item.id === post.id ? newPost : item
			);

			return mutate(updateLike(post.id, like), {
				optimisticData: newPosts,
				populateCache: false,
				revalidate: false,
				rollbackOnError: true,
			});
		},
		[posts, mutate]
	);

	const postComment = useCallback(
		(post: SimplePostType, comment: CommentType) => {
			const newPost = {
				...post,
				comments: post.comments + 1,
			};

			const newPosts = posts?.map((item) =>
				item.id === post.id ? newPost : item
			);

			return mutate(addComment(post.id, comment.comment), {
				optimisticData: newPosts,
				populateCache: false,
				revalidate: false,
				rollbackOnError: true,
			});
		},
		[posts, mutate]
	);

	return { posts, isLoading, error, setLike, postComment };
}
