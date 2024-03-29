import { HomeUserType } from '@/model/user';
import { useCallback } from 'react';
import useSWR from 'swr';

async function updateBookmark(postId: string, bookmark: boolean) {
	return fetch('/api/bookmarks', {
		method: 'PUT',
		body: JSON.stringify({ id: postId, bookmark }),
	}).then((res) => res.json());
}

export default function useMe() {
	const {
		data: user,
		isLoading,
		error,
		mutate,
	} = useSWR<HomeUserType>('/api/me');

	const setBookmark = useCallback(
		(postId: string, bookmark: boolean) => {
			if (!user) return;

			const bookmarks = user?.bookmarks ?? [];

			const newUser = {
				...user,
				bookmarks: bookmark
					? [...bookmarks, postId]
					: bookmarks.filter((item) => item !== postId),
			};

			return mutate(updateBookmark(postId, bookmark), {
				optimisticData: newUser,
				populateCache: false,
				revalidate: false,
				rollbackOnError: true,
			});
		},
		[user, mutate]
	);

	return { user, isLoading, error, setBookmark };
}
