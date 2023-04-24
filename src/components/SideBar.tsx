import { AuthUserType } from '@/model/user';
import Avatar from './Avatar';

interface IProps {
	user: AuthUserType;
}

export default function SideBar({ user: { name, username, image } }: IProps) {
	return (
		<>
			<div className='flex items-center'>
				{image && <Avatar image={image} />}
				<div className='ml-4'>
					<p className='font-bold'>{username}</p>
					<p className='text-lg text-neutral-500 leading-5'>{name}</p>
				</div>
			</div>
			<p className='text-sm text-neutral-500 mt-8'>
				About ・ Help ・ Press ・ API ・ Jobs ・ Privacy ・ Terms ・ Locations
				・ Language
			</p>
			<p className='font-bold text-sm mt-8 text-neutral-500'>
				@CopyRight 2023 INSTANTGRAM FROM METAL
			</p>
		</>
	);
}
