import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import { SimplePostType } from '@/model/post';
import PostGridCard from './PostGridCard';

interface IProps {
	username: string;
	query: string;
}

export default function PostGrid({ username, query }: IProps) {
	const {
		data: posts,
		isLoading: loading,
		error,
	} = useSWR<SimplePostType[]>(`/api/users/${username}/${query}`);

	return (
		<div className='w-full text-center'>
			{loading && <GridSpinner />}
			<ul className='grid grid-cols-3 gap-4 py-4 px-8'>
				{posts &&
					posts.map((post, index) => (
						<li key={post.id}>
							<PostGridCard post={post} priority={index < 6} />
						</li>
					))}
			</ul>
		</div>
	);
}
