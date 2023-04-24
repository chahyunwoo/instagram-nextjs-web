'use client';

import useSWR from 'swr';
import { useState } from 'react';
import { SearchUserType } from '@/model/user';
import GridSpinner from './ui/GridSpinner';
import UserCard from './UserCard';
import useDebounce from '@/hooks/debounce';

export default function UserSearch() {
	const [keyword, setKeyword] = useState('');
	const debouncedKeyword = useDebounce(keyword, 500);
	const {
		data: users,
		isLoading: loading,
		error,
	} = useSWR<SearchUserType[]>(`/api/search/${debouncedKeyword}`);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<section className='w-full max-w-2xl my-4 flex flex-col items-center'>
			<form className='w-full mb-4' onSubmit={onSubmit}>
				<input
					className='w-full text-xl p-3 outline-none border border-gray-400'
					type='text'
					autoFocus
					placeholder='Search for a username or name'
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</form>
			{error && <p>Something Wrong 😥</p>}
			{loading && <GridSpinner />}
			{!loading && !error && users?.length === 0 && <p>No users found</p>}
			<ul className='w-full p-4'>
				{users &&
					users.map((user) => (
						<li key={user.username}>
							<UserCard user={user} />
						</li>
					))}
			</ul>
		</section>
	);
}
