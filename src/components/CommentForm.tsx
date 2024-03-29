import { useState } from 'react';
import SmileIcon from './ui/icons/SmileIcon';

interface IProps {
	onPostComment: (comment: string) => void;
}

export default function CommentForm({ onPostComment }: IProps) {
	const [comment, setComment] = useState('');

	const buttonDisabled = comment.length === 0;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		onPostComment(comment);

		setComment('');
	};

	return (
		<form
			className='flex items-center border-t border-neutral-300 px-3'
			onSubmit={handleSubmit}>
			<SmileIcon />
			<input
				className='w-full ml-2 border-none outline-none p-3'
				type='text'
				placeholder='Add a comment...'
				required
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button
				disabled={buttonDisabled}
				className={`font-bold ml-2 ${
					buttonDisabled ? 'text-sky-300' : 'text-sky-500'
				}`}>
				Post
			</button>
		</form>
	);
}
