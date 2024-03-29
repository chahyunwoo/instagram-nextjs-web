import { SearchUserType } from '@/model/user';
import Link from 'next/link';
import Avatar from './Avatar';

interface IProps {
	user: SearchUserType;
}

export default function UserCard({ user }: IProps) {
	const { name, username, image, following, followers } = user;

	return (
		<Link
			className='flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50'
			href={`/user/${username}`}>
			<Avatar image={image} />
			<div className='text-neutral-500'>
				<p className='text-black font-bold leading-4'>{username}</p>
				<p>{name}</p>
				<p className='text-sm leading-4'>{`${followers} followers ${following} following`}</p>
			</div>
		</Link>
	);
}
