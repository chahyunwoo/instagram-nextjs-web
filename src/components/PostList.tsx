'use client';

import { SimplePostType } from '@/model/post';
import useSWR from 'swr';
import { GridLoader } from 'react-spinners';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';

export default function PostList() {
	const { data: posts, isLoading: loading } =
		useSWR<SimplePostType[]>('/api/posts');

	return (
		<section>
			{loading && (
				<div className='text-center mt-32'>
					<GridSpinner />
				</div>
			)}
			{posts && (
				<ul>
					{posts &&
						posts.map((post, index) => (
							<li className='mb-4' key={post.id}>
								<PostListCard post={post} priority={index < 2} />
							</li>
						))}
				</ul>
			)}
		</section>
	);
}
