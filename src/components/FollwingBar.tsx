'use client';
import useSWR from 'swr';

import { DetailUserType } from '@/model/user';
import { PropagateLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

export default function FollwingBar() {
	const { data, isLoading: loading, error } = useSWR<DetailUserType>('/api/me');
	const users = data?.following && [
		...data?.following,
		...data?.following,
		...data?.following,
	];

	return (
		<section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-l min-h-[90px] overflow-x-auto'>
			{loading ? (
				<PropagateLoader size={8} color='crimson' />
			) : (
				(!users || users.length === 0) && (
					<p className='text-center text-neutral-500'>No following</p>
				)
			)}
			{users && users.length > 0 && (
				<ScrollableBar>
					{users.map(({ username, image }, index) => (
						<Link
							key={index}
							className='flex flex-col items-center w-20'
							href={`/user/${username}`}>
							<Avatar image={image} highlight />
							<p className='w-full text-sm text-ellipsis overflow-hidden text-center'>
								{username}
							</p>
						</Link>
					))}
				</ScrollableBar>
			)}
		</section>
	);
}
