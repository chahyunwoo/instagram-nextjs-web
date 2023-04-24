'use client';

import { ProfileUserType } from '@/model/user';
import Button from './ui/Button';
import useMe from '@/hooks/me';

interface IProps {
	user: ProfileUserType;
}

export default function FollowButton({ user }: IProps) {
	const { user: loggedInUser } = useMe();

	const showButton = loggedInUser && loggedInUser.username !== user.username;

	const following =
		loggedInUser &&
		loggedInUser.following.find((item) => item.username === user.username);

	const text = following ? 'Unfollow' : 'Follow';

	return (
		<>
			{showButton && (
				<Button text={text} onClick={() => {}} crimson={text === 'Unfollow'} />
			)}
		</>
	);
}
